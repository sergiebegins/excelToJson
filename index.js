const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    source: fs.readFileSync('t.xlsx') // fs.readFileSync return a Buffer
});


let data = JSON.stringify(result);
fs.writeFileSync('t.json', data);
 
console.log(result);
 
