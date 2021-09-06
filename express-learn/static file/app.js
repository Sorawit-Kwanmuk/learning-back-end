const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../routing/pages/index.html'));
// });
// Failed to load resource: the server responded with a status of 404 (Not Found)
//มันไม่สามารถเข้าถึงไฟล์ main.js ที่เป็น static file ได้ มันเสมือนเรียกใช้
//app.get('/main.js', (req, res, next) => {})
//เนื่องจากในไฟล์ ../routing/pages/index.html มีscript ที่เรียกใช้ไปยัง main.js ซึ่งเป็น static file ภายในเครื่อง
//ซึ่งเมื่อ server ไม่สามารถเรียกใช้ไฟล์ที่อยู่ในเครื่องเราได้
//แก้ได้โดยใช้ express.static
// app.use(express.static(path.join(__dirname, './public'))); //http://localhost:9000/images/ชื่อไฟล์ภาพ
app.use('/public', express.static(path.join(__dirname, './public'))); //http://localhost:9000/public/images/ชื่อไฟล์ภาพ

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './pages/index.html'));
  //server สามารถเข้าถึง ไฟล์ main.js ได้แล้ว จากการที่เราใช้express.static
});

app.listen(9000, () => {
  console.log('listening on port 9000');
});
