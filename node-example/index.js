// const chalk = require('chalk');
// console.log(chalk.blue, 'Welcome to Node.js. Javascript server side');
// console.log(chalk.green, 'This is from line 1');
// console.log(chalk.red, 'This is from line 2');
// console.log(chalk.yellow, 'This is from line 3');
// console.log(chalk.magenta, 'This is from line 4');
// console.log(chalk.cyan, 'This is from line 5');

// import { MONTHS } from './date.js'; //ใช้ import แบบ ecma ไม่ได้
// ต้องเพิ่ม "type":"module" ใน package.json
//   "devDependencies": {
//     "chalk": "^4.1.2",
//     "type":"module"
//   }
// import { MONTHS } from './date.js';
// console.log(MONTHS);

// const month = require('./date');
// console.log(month);
// console.log(month.MONTHS_SHORT);
// console.log(month.MONTHS_LONG);

const { MONTHS_SHORT, MONTHS_LONG: long } = require('./date');
console.log(MONTHS_SHORT);
console.log(long);

const axios = require('axios');
const fs = require('fs');
