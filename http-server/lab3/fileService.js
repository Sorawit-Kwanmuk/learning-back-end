//Lab3.2
const fs = require('fs/promises');

// const readFileJSON = async fileName => {
//   const result = await fs.readFile(fileName, 'utf8');
//   return JSON.parse(result);
// };

// const writeFileJSON = (fileName, data) => {
//   return fs.writeFile(fileName, JSON.stringify(data));
// };

//Method#1
// module.exports = {
//   readFileJSON: readFileJSON,
//   writeFileJSON: writeFileJSON,
// };

//Method#2
// exports.readFileJSON = readFileJSON;
// exports.writeFileJSON = writeFileJSON;

// โดยส่วนใหญ่จะเขียนแบบนี้
exports.readFileJSON = async fileName => {
  const result = await fs.readFile(fileName, 'utf8');
  return JSON.parse(result);
};

exports.writeFileJSON = (fileName, data) => {
  return fs.writeFile(fileName, JSON.stringify(data));
};
