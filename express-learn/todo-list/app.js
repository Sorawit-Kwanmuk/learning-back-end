const express = require('express');
const app = express();

// app.use((request, response) => {
//   response.send('<h1>Welcome to my EXPRESS!!!</h1>');
// }); //app.use ไม่ว่าจะเป็น methord อะไรก็ตาม path อะไรก็ตามจะทำงานทุกการ request

app.get('/', (req, res) => {
  res.send('<h1>This is Root path!!!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is About path!!!</h1>');
});

app.post('/create-something', (req, res) => {
  res.send('<h1>This is method post,  path: /create-something</h1>');
}); //การพิมพ์ path /create-something ใน localhost จะได้ผลลัพท์ Cannot GET /create-something เพราะการพิมพ์ใน localhost จะถือว่าเป็น get
//ซึ่งเราได้ใช้คำสั่งเป็น app.post ทำให้มันหาไม่เจอ
//สามารถดูได้ผ่าน postman

app.put('/users/update', (req, res) => {
  res.send('<h1>This is method put,  path: /users/update</h1>');
});

app.delete('/', (req, res) => {
  res.status(400).send({ message: `Delete Successfully!!!`, title: `test status 400` });
});

app.post('/', (req, res) => {
  res.send('<h1>This is method post of root path 1</h1>');
});
//ถ้า method กับ path ซ้ำกัน จะทำงานอันบน เพราะมันอ่านโค้ดจากบนลงล่าง
app.post('/', (req, res) => {
  res.send('<h1>This is method post of root path 2</h1>');
});

app.listen(8000, () => {
  console.log('Server start on port 8000');
});
