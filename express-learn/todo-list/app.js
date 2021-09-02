const express = require('express');
const app = express();

app.use((request, response) => {
  response.send('<h1>Welcome to my EXPRESS!!!</h1>');
}); //app.use ไม่ว่าจะเป็น methord อะไรก็ตาม path อะไรก็ตามจะทำงานทุกการ request

app.get('/', (req, res) => {
  res.send('<h1>This is Root path!!!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is About path!!!</h1>');
});

app.listen(8000, () => {
  console.log('Server start on port 8000');
});
