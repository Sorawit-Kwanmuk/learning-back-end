const express = require('express');
const app = express();
const path = require('path');

// LAb5.1.1
// app.get('/sum', (req, res, next) => {
//   const query = req.query;
//   const { a, b } = req.query;
//   //GET /sum?a=2&b=6 Response: { sum: 8 }
//   res.send({ sum: Number(a) + Number(b) });
//   console.log(query);
// });
//Lab5.1.2
// app.get('/sum', (req, res, next) => {
//   const query = req.query;
//   // GET /sum?a=1&b=4&c= … Response: { sum: ผลรวมของทั้งหมด }
//   const sum = Object.values(query).reduce((acc, cur) => acc + Number(cur), 0);
//   res.send({ sum });
//   console.log(query);
// });

// Lab5.1.3
// app.get('/sum', (req, res, next) => {
//   const query = req.query;
//   //   GET /sum?arr=[1, 2, 4] Response: { sum: 7 }
//   const arr = query.arr.split(',').map(Number);
//   console.log(arr);
//   //   const sum = arr.reduce((acc, cur) => acc + cur, 0);
//   //   res.send({ sum });
//   //   res.send({ sum });
//   //   console.log(query);
//   //   console.log(sum);
// });

// Lab 5.1.1 เฉลย
// app.get('/sum', (req, res, next) => {
//   const { a, b } = req.query;
//   res.json({ sum: Number(a) + Number(b) });
// });

// Lab 5.1.2 เฉลย
// app.get('/sum', (req, res, next) => {
//   const query = req.query;
//   const sum = Object.values(query) //ได้เป็น array
//     .reduce((acc, cur) => acc + +cur, 0); //รวมทั้งหมด
//   res.json({ sum });
// });

// Lab 5.1.3 เฉลย
app.get('/sum', (req, res, next) => {
  const query = req.query; //ได้เป็น string ของ array
  const sum = JSON.parse(query.arr) //แปลง string เป็น array
    .reduce((acc, cur) => acc + +cur, 0); //รวมทั้งหมด
  res.json({ sum });
});

app.listen(8600, () => {
  console.log('listening on port 8600');
});
