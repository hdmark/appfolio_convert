const pdfLib = require('pdfjs-dist');
var Promise = require('bluebird');

let readPDF = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      let _pdf = await pdfLib.getDocument({ data: reader.result }).promise;
      let fullText = [];
      for (let p = 1; p < _pdf.numPages + 1; p++) {
        let _page = await _pdf.getPage(p);
        // get page 1 text
        let _pageText = await _page.getTextContent(render_options);
        let text = [..._pageText.items];
        console.log('annotations', _page.getAnnotations());
        // text.push(..._pageText.items);
        text.sort((a, b) => {
          let aX = a.transform[4];
          let bX = b.transform[4];
          let aY = a.transform[5];
          let bY = b.transform[5];
          if (aY == bY) {
            return aX - bX;
          }
          return aY < bY ? 1 : -1;
        });
        fullText.push(...text);
      }

      // text = text.sort((a, b) => {
      //   let aX = a.transform[4];
      //   let bX = b.transform[4];
      //   let aY = a.transform[5];
      //   let bY = b.transform[5];
      //   if (aY == bY) {
      //     return aX - bX;
      //   }
      //   return aY > bY ? 1 : -1;
      // });
      let inTable = false;
      fullText.forEach((t) => {
        if (t.str.includes('Beginning Cash Balance as of')) {
          console.log('START TABLE');
          inTable = true;
        }

        console.log(t.str, t.transform);
        if (t.str.includes('Ending Cash Balance') && inTable) {
          console.log('TABLE END');
          inTable = false;
        }
      });
      // console.log(text);

      resolve(fullText);
    };
  });
};

let processPDF = (text) => {
  // -----------------EXTRACT THE DATA INTO TABLES-----------------------
  let insideTable = false;
  let row, balance;
  let table = [];
  let props = [];
  let property = '';
  let period = '';
  let acct_id = '';
  let remitFlag = false;

  let bounds = {
    Date: 0,
    'Payee / Payer': 0,
    Type: 0,
    Reference: 0,
    Description: 0,
    Income: 0,
    Expense: 0,
    Balance: 0,
    'Cash In': 0,
    'Cash Out': 0,
  };
  // console.log(text);
  let prevStr = '';
  // console.log(text);
  for (let l of text) {
    // trim the text of whitespace
    let str = l.str.trim();
    let x = l.transform[4];
    if (remitFlag == true) {
      remitFlag = false;
      continue;
    }
    // if were inside of a table
    // console.log(str, x, Object.keys(bounds).includes(str), insideTable);
    if (insideTable) {
      // check for last row
      if (str.indexOf('Ending Cash Balance') === 0) {
        // if last row, turn off table, push to properties, clear table
        insideTable = false;
        balance = null;
        props.push({
          property: property || 'Unknown Property',
          period: period || 'n/a',
          txs: table,
          acct_id,
        });
      } else if (str.indexOf('Please Remit') === 0) {
        remitFlag = true;
        continue;
      } else if (balance == null) {
        // first row between beginning balance and real data
        balance = parseFloat(str.replace(/,/g, ''));
      } else if (!Object.keys(bounds).includes(str) && !/Page.*of/.test(str)) {
        // check if item is in same column as late item, append
        //if not

        if (x > bounds['Balance']) {
          row.balance += str;
          row.date = row.date != '' ? row.date : '1/1/1900';
          row.payee = row.payee != '' ? row.payee : 'empty';
          row.type = row.type != '' ? row.type : 'empty';
          row.ref = row.ref != '' ? row.ref : 'empty';
          row.desc = row.desc != '' ? row.desc : 'empty';
          //row.income = row.income != '' ? row.income : '0';
          //row.expense = row.expense != '' ? row.expense : '0';
          //row.balance = row.balance != '' ? row.balance : '0';
          //row.amount = row.amount != 0 ? row.amount : 0;

          table.push(row);
        } else if (x > bounds['Expense']) {
          row.expense += str;
          row.amount -= parseFloat(str.replace(',', ''));
          // console.log(row.amount, str);
        } else if (x > bounds['Income']) {
          row.income += str;
          row.amount += parseFloat(str.replace(',', ''));
        } else if (x > bounds['Description']) {
          row.desc += ` ${str}`;
        } else if (x > bounds['Reference']) {
          row.ref += str;
        } else if (x > bounds['Type']) {
          row.type += str;
        } else if (x > bounds['Payee / Payer']) {
          row.payee += ` ${str}`;
        } else if (x > bounds['Date']) {
          row = {
            date: '',
            payee: '',
            type: '',
            ref: '',
            desc: '',
            income: '',
            expense: '',
            balance: '',
            amount: 0,
          };
          row.date = str;
        }
      }

      // not inside table
    } else if (str.indexOf('Beginning Cash Balance as') === 0) {
      // mark that were in a table
      insideTable = true;
      table = [];

      // grab property name
    } else if (prevStr == 'Properties') {
      property = str;
      if (localStorage.getItem(property)) {
        acct_id = localStorage.getItem(property);
      }

      // grab period of report
    } else if (prevStr == 'Period:') {
      period = str;

      // grab bounds of the columns
    } else if (Object.keys(bounds).includes(str)) {
      if (str == 'Cash In') {
        bounds['Income'] = x - 10;
      } else if (str == 'Cash Out') {
        bounds['Expense'] = x - 10;
      } else {
        bounds[str] = x - 10;
      }
    }
    prevStr = str;
  }
  // console.log('props done', props);
  return props;
};

// function fixLines(pageData) {
//   let lastX,
//     text = '';
//   let textArr = [];
//   let temp = '';
//   let x = 0;
//   // let flag = false;
//   for (let item of pageData.items) {
//     if (lastX == item.transform[4] || !lastX) {
//       //text += ' ' + item.str;
//       temp += ' ' + item.str;
//     } else {
//       //text += '\n' + item.str;
//       // THIS CAN BE REPLACED WITH THE FUNCTION CALL OF THE PROCESSING DOWN BELOW
//       textArr.push({ str: temp, x: lastX });
//       temp = item.str;
//     }
//     lastX = item.transform[4];
//   }
//   // text = text + '\n';
//   // textArr.push({ str: temp, x: lastX });
//   return textArr;
// }
let render_options = {
  //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
  normalizeWhitespace: true,
  //do not attempt to combine same line TextItem's. The default value is `false`.
  disableCombineTextItems: false,
};

const parser = async (file) => {
  try {
    // read the file into array of text with x positions
    let text = await readPDF(file);

    // process the text into property transactions
    let properties = processPDF(text);
    return properties;
  } catch (error) {}
};

export { parser };
