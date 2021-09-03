const express = require('express');
const app = express();
const path = require('path');

//absolute path D:\work\NodeJs\learning back end\express-learn\pages
// console.log(path.resolve('./'));

// console.log(path.join('./'), 'pages/index.html');

// console.log(__dirname);

// console.log(__filename);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/login.html'));
// });

// app.post('/post-login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'pages/login.html'));
// });

app.listen(8000, () => {
  console.log('listening on port 8000');
});
