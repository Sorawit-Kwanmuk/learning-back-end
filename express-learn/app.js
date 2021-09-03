const express = require('express');

const app = express();

// app.use((request, response) => {
//   response.send('<h1>Welcome to my First Express Web App</h1>');
// });

app.use((req, res, next) => {
  console.log(req.user);
  //after finding user in Database
  //สามารถเพิ่ม key req.user เข้าไปได้
  req.user = { id: 1, name: 'John', email: 'example@email.com' };
  next();
});

app.use((req, res, next) => {
  console.log(req.user);
});

app.listen(8888, () => {
  console.log('Server running on port 8888');
});
