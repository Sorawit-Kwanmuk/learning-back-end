//Lab3.1
// const fs = require('fs');
// const axios = require('axios');
// const uuid = require('uuid');

//Lab3.2
// const file = require('./fileService');
// file.readFileJSON('data.json').then(res => console.log(res));

// const { readFileJSON } = require('./fileService');
// readFileJSON('data.json').then(res => console.log(res));

//Lab3.3
const CustomError = require('./customError');
const cus = new CustomError('Test error', 404);

console.log(cus.message);
console.log(cus.statusCode);
