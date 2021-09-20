const express = require('express');
const app = express();
const mysql = require('mysql2/promise');
const todoRoute = require('./routes/todoRoute');

// const connectionPromise = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'sorawitk41',
//   database: 'todo_mysql', //ชื่อ database ที่ใช้
// });

// connectionPromise
//   .then(connection => {
//     console.log('Connected to MySQL database successfuly');
//     // const resultPromist = connection.query(
//     //   //   'insert into lists (title) values ("Meeting")'
//     // //   'insert into lists (title, due_date) values ("Meet a doctor", "2021-09-19")'
//     // );
//     const resultPromist = connection.query('select * from lists'); //[rows, fields]
//     return resultPromist;
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log('Error connecting to MySQL database: ', error);
//   });

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'sorawitk41',
//   database: 'todo_mysql',
//   connectionLimit: 100,
// });

// pool
//   .query('select * from lists')
//   .then(([rows]) => {
//     console.log(rows);
//   })
//   .catch(error => {
//     console.log('Error connecting to MySQL database: ', error);
//   });

// const { username, password } = req.body; // username = 'john', password = '1234'
// 'select * from users where username = ' +
//   username +
//   ' and password = ' +
//   password;
//   'select * from users where username = ' + "john" + ' and password = ' + "1234";
// แต่ถ้ากรอก username = "john", password = "1234; DROP TABLE user"
// 'select * from users where username = ' + 'john' + ' and password = ' + "1234; DROP TABLE user";
//ผลที่เกิดขึ้นคือ เมื่อมัน select password 1234 เข้ามา ทำให้เกิด sql injection มันจะ run DROP TABLE user ต่อ คือพัง

// pool
//   .execute('insert into lists (title, completed, due_date) values (?,?,?)', [
//     'Shopping',
//     true,
//     new Date('2021-08-30'),
//   ])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log('Error connecting to MySQL database: ', error);
//   });

// pool.execute('select * from lists where id = 3');
// pool
//   .execute('SELECT * FROM lists WHERE id = ?', [3])
//   .then(result => {
//     console.log(result[0]);
//   })
//   .catch(error => {
//     console.log('Error connecting to MySQL database: ', error);
//   });

app.use(express.json());

app.use('/todos', todoRoute);

app.listen(6400, () => {
  console.log('Listening on port 6400');
});
