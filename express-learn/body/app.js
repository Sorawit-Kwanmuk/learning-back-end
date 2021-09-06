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

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './pages/login.html'));
});
app.post('/post-login', (req, res) => {
  const body = req.body;
  //ต้องแปลง request body เป็น key value จากในรูปแบบ json
  //  ให้อยู่ในรูปของ object โดยผ่าน middleware express.urlencoded
  //content-type: application/x-www-form-urlencoded
  console.log(body.username);
  console.log(typeof body.username); //string
  console.log(body.password);
  console.log(typeof body.password); //string
  //Content-Type application/json
  console.log(body.username);
  console.log(typeof body.username); //string
  console.log(body.password);
  console.log(typeof body.password); //number
});

app.listen(2000, () => {
  console.log('listening on port 2000');
});
