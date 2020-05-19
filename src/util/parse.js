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
        //console.log(_page);
        // get page 1 text
        let _pageText = await _page.getTextContent(render_options);
        let text = [..._pageText.items];
        // console.log('annotations', _page.getAnnotations());
        // text.push(..._pageText.items);
        // text.sort((a, b) => {
        //   let aX = a.transform[4];
        //   let bX = b.transform[4];
        //   let aY = a.transform[5];
        //   let bY = b.transform[5];
        //   if (aY == bY) {
        //     return aX - bX;
        //   }
        //   return aY < bY ? 1 : -1;
        // });
        // text.forEach((line) => {
        //   line.transform[5] += 10000 * p;
        // });
        fullText.push(...text);
      }

      resolve(fullText);
    };
  });
};
let readPDF2 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      let _pdf = await pdfLib.getDocument({ data: reader.result }).promise;
      let fullText = [];
      for (let p = 1; p < _pdf.numPages + 1; p++) {
        let _page = await _pdf.getPage(p);
        //console.log(_page);
        // get page 1 text
        let _pageText = await _page.getTextContent(render_options);
        let text = [..._pageText.items];
        // console.log('annotations', _page.getAnnotations());
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
        text.forEach((line) => {
          line.transform[5] += 10000 * p;
        });
        fullText.push(...text);
      }

      resolve(fullText);
    };
  });
};
let processPDFNew = (fullText) => {
  console.log('starting');
  let insideTable = false;
  let tables = [];
  let propertyCount = -1;

  // loop through the full text to grab out the tables
  let i = 0;
  while (i < fullText.length) {
    // for (let i = 0; i < fullText.length; i++) {
    let curText = fullText[i].str;
    if (curText.includes('Beginning Cash Balance as of')) {
      // now inside a table
      insideTable = true;
      // increment the property count and add a new blank array to the tables
      propertyCount++;
      tables.push([]);
      // skip the starting balance
      i++;
      continue;
    } else if (curText.includes('Ending Cash Balance') && insideTable) {
      // table is done
      insideTable = false;
    } else if (insideTable) {
      if (fullText[i].str == 'Date' && fullText[i + 1].str == 'Payee / Payer') {
        i += 8;
        continue;
      }
      // add the string to the table values
      tables[propertyCount].push(fullText[i]);
    }
    i++;
  }

  // sort the tables by x and then y to get columns
  tables.forEach((table) => {
    table.sort((a, b) => {
      let aX = a.transform[4];
      let bX = b.transform[4];
      let aY = a.transform[5];
      let bY = b.transform[5];
      if (aX == bX) {
        return bY - aY;
      }
      return aX > bX ? 1 : -1;
    });
  });
  // console.log(tables);

  // loop through tables, collapsing the blocks into single lines, and moving to the center of the row
  tables.forEach((table) => {
    let block = false;
    let bottom = 0;
    let top = 0;

    // loop through the table backwards
    for (let i = table.length - 1; i > 0; i--) {
      let curTransform = table[i].transform;
      let prevTransform = table[i - 1].transform;
      let curText = table[i].str;
      let prevText = table[i - 1].str;

      // check to see if the current line is in a block (close enough to the line above it)
      if (Math.abs(curTransform[5] - prevTransform[5]) < 10) {
        // set the new top value to the line above
        top = prevTransform[5];

        // if this is the bottom of a block, set the bottom y value
        if (block == false) {
          bottom = curTransform[5];
        }

        // set block to true
        block = true;

        // set the previous str to include the current str and remove the current line
        table[i - 1].str = prevText + curText;
        table.splice(i, 1);

        // if not in a block
      } else {
        // check to see if we were in a block
        // this would mean the current line is the top of a block
        if (block == true) {
          // set the height to the average of the block we just looped through
          table[i].transform[5] = parseFloat(((top + bottom) / 2).toFixed(4));
        }
        // reset top, bottom and block
        top = 0;
        bottom = 0;
        block = false;
      }
    }
  });
  console.log(tables);
  console.log('ending');
  tables.forEach((table) => {
    for (let i = 0; i < table.length; i++) {
      if (table[i].transform[4] > table[i - 1].transform[4]) {
        // new column
      }
    }
  });
  // tables.forEach((table) => {
  //   table.sort((a, b) => {
  //     let aX = a.transform[4];
  //     let bX = b.transform[4];
  //     let aY = a.transform[5];
  //     let bY = b.transform[5];
  //     if (aY == bY) {
  //       return aX - bX;
  //     }
  //     return aY < bY ? 1 : -1;
  //   });
  // });
  // console.log(tables);

  // // loop through the columns, buliding my rows
  // tables.forEach((table) => {
  //   let dateX = table[0].transform[4];
  //   let rowCount =0;

  //   table.forEach(line=>{
  //     if(line.transform[4]== dateX){
  //       rowCount += 1;
  //     }
  //   })
  //   let row = {
  //     date: '',
  //     payee: '',
  //     type: '',
  //     ref: '',
  //     desc: '',
  //     income: '',
  //     expense: '',
  //     balance: '',
  //     amount: 0,
  //   };
  // });
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
  for (const [index, l] of text.entries()) {
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
          row.balance = row.balance == null || row.balance == '' ? str : row.balance;
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

      // grab a property name v2
    } else if (str == 'Property Cash Summary') {
      property = prevStr.split(' - ')[0];
      if (localStorage.getItem(property)) {
        acct_id = localStorage.getItem(property);
      }

      // grab period of report
    } else if (prevStr == 'Period:') {
      period = str;
      console.log(period);

      // grab a period of report v2
    } else if (prevStr == 'Owner Statement' && period == '') {
      period = str;
      console.log(period);

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
    console.log('about to process pdf new');
    // let properties2 = processPDFNew(text);

    let properties = processPDF(text);
    //console.log(properties);
    return properties;
    return [];
  } catch (error) {}
};

export { parser };
