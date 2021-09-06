const { default: axios } = require('axios');
const express = require('express');
const app = express();
const path = require('path');

//ถ้า Content-Type เป็น multipart/form-data (จำพวก รูปภาพ) ให้ใช้ external middleware เช่น busboy, multer,formidable
//Client send request to server
// axios.post('/upload', new FormData(), {
//   header: { 'Content-Type': 'multipart/form-data' },
// });
//ถ้า Content-Type เป็น application/x-www-form-urlencoded ให้ใช้ body-parser
app.use(express.urlencoded({ extended: false }));
//extended: false คือ การเลือก library
// extended: false; =>   library =>  qs JSON.parse username=12345&password=6789 to javascript object
// extended: true; =>    library querystring =>  qsJSON.parse   แปลง JSON string เป็น javascript object

//ในกรณีที่ Content-Type application/json
app.use(express.json()); //JSON.parse   แปลง JSON string เป็น javascript object

// ส่งแบบ body ใช้ได้แค่ post put patch เท่านั้น

// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, './pages/login.html'));
// });
// app.post('/post-login', (req, res) => {
//   const body = req.body;
//   //ต้องแปลง request body เป็น key value จากในรูปแบบ json
//   //  ให้อยู่ในรูปของ object โดยผ่าน middleware express.urlencoded
//   //content-type: application/x-www-form-urlencoded
//   console.log(body.username);
//   console.log(typeof body.username); //string
//   console.log(body.password);
//   console.log(typeof body.password); //string
//   //Content-Type application/json
//   console.log(body.username);
//   console.log(typeof body.username); //string
//   console.log(body.password);
//   console.log(typeof body.password); //number
// });

//Lab7.1.1
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/lab7.1.1.html'));
});
app.get('/users', (req, res) => {
  const body = req.body;
  console.log({ id: body.id });
  console.log({ email: body.email });
});

//Lab7.1.2
app.post('/login', (req, res) => {
  const body = req.body;
  console.log({ Email: body.email });
  console.log({ Password: body.password });
});

//Lab7.1.3
app.put('/products/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  console.log({ ID: id });
  console.log({ Name: body.name });
  console.log({ Price: body.price });
  console.log({ Description: body.description });
});

//Lab7.1.4
app.delete('/products', (req, res) => {
  const body = req.body;
  console.log({ ID: body.productId });
});

app.listen(2100, () => {
  console.log('listening on port 2100');
});
