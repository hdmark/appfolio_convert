const OFX_HEADER = `OFXHEADER:100
DATA:OFXSGML
VERSION:102
SECURITY:NONE
ENCODING:USASCII
CHARSET:1252
COMPRESSION:NONE
OLDFILEUID:NONE
NEWFILEUID:NONE
<OFX>
  <SIGNONMSGSRSV1>
    <SONRS>
      <STATUS>
        <CODE>0
        <SEVERITY>INFO
        <MESSAGE>SUCCESS
      </STATUS>
      <DTSERVER>20190722175849.530[-7:PDT]
      <LANGUAGE>ENG
      <FI>
        <ORG>WF
        <FID>3000
      </FI>
      <INTU.BID>3000
    </SONRS>
  </SIGNONMSGSRSV1>
  <BANKMSGSRSV1>
    <STMTTRNRS>
      <TRNUID>0
      <STATUS>
        <CODE>0
        <SEVERITY>INFO
        <MESSAGE>SUCCESS
      </STATUS>
      <STMTRS>
        <CURDEF>USD
        <BANKACCTFROM>
          <BANKID>031000503
          <ACCTID>{{acct_id}}
          <ACCTTYPE>CHECKING
        </BANKACCTFROM>
        <BANKTRANLIST>
        <DTSTART>20190423110000.000[-7:PDT]<DTEND>20190716110000.000[-7:PDT]
          {{transactions}}
        </BANKTRANLIST>
        <LEDGERBAL>
          <BALAMT>0.00</BALAMT>
          <DTASOF>20150831</DTASOF>
        </LEDGERBAL>
      </STMTRS>
    </STMTTRNRS>
  </BANKMSGSRSV1>
</OFX>
`;

const OFX_TRANSACTION = `
<STMTTRN>
    <TRNTYPE>PAYMENT
    <DTPOSTED>{{date}}
    <TRNAMT>{{amount}}
    <FITID>{{id}}
    <NAME>{{name}}
    <MEMO>{{memo}}
</STMTTRN>`;

function getName(rowData) {
  let name = 'Unknown';

  if (rowData.supplierFound && rowData.supplierFound.length > 0) {
    name = _.startCase(rowData.supplierFound);
  } else if (rowData.label !== undefined) {
    name = rowData.label.replace(/PAIEMENT CARTE [0-9]* /, '');
  }

  return _.startCase(_.lowerCase(name));
}

function getDate(rowData) {
  const [m, d, y] = rowData.date.split('/');

  return y + m + d;
}

function generateOfx(csvRows, acct_id) {
  // console.log('hi', csvRows);
  let ofxTransactions = '';

  for (let index = 0; index < csvRows.length; index++) {
    let rowData = csvRows[index];
    ofxTransactions += OFX_TRANSACTION.replace('{{date}}', getDate(rowData))
      .replace('{{amount}}', rowData.amount)
      .replace('{{id}}', index)
      .replace('{{name}}', rowData.payee.substring(0, 31)) //getName(rowData));
      .replace('{{memo}}', rowData.desc.substring(0, 254));
  }

  // account id - 11 digits
  return OFX_HEADER.replace(
    '{{acct_id}}',
    `${acct_id}`.padStart(11, '0'),
  ).replace('{{transactions}}', ofxTransactions);
}

export default generateOfx;
