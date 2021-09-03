const express = require('express');
const app = express();
const path = require('path');
const { nextTick } = require('process');

app.use((req, res, next) => {
  console.log('Middleware 1');
  req.test = 'test';
  next(); //ทำงานเสร็จ ให้ทำงานตัวถัดไป
});
app.use((req, res, next) => {
  console.log('Middleware 2'); //ไม่มี next จะหมุนค้างอยู่ตรงนี้
  //   req.user = finedUser();
  //   if (req.user) {
  //     next();
  //   } else {
  //     res.status(401).send('Unauthorized');
  //   }
});

app.get('/', (req, res) => {
  console.log('Midleware GET /');
  res.send('Hello World!');
});

app.get('/Home', (req, res) => {
  console.log('Midleware GET /Home');
  res.send('Home');
});

//Lab 2.1
//middleware คือ ('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// })
//middleware 1 มันจะทำงานตั้งแต่ middleware 1 ไปจนถึง ตัวสุดท้าย เมื่อตัวใหนส่งresponse ออกไป ตัวอื่นก็จจะไม่ทำงาน
// app.get('/', (req, res) => {
//   // res.send('<h2>My First Web App using Express</h2>');
//   //   res.send({ title: 'My First Web App', message: 'Our Web App API' });
//   res.json({ title: 'My First Web App', message: 'Our Web App API' });
// });

//Lab 2.2 GET, POST, PUT, PATCH, DELETE
//middleware 2
// app.get('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// });
//middleware 3
// app.post('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// });

// app.put('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// });

// app.patch('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// });

// app.delete('/todos', (req, res) => {
//   res.json({ message: `${req.method} todos` });
// });

//lab 2.3
// app.get('/redirect', (req, res) => {
//   res.redirect('https://www.google.com');
// });

//Lab 2.4
//#1
// app.get('/404', (req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });
//#2
// app.get('/404', (req, res) => {
//   res.send(404, '<h1>This page is not found</h1>');
// });
// app.get('/404', (req, res) => {
//   res.send('<h1>This page is not found</h1>', 404);
// });

//Lab 2.5
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to my website</h1>');
// });
// app.get('/home', (req, res) => {
//   res.send('<h1>This is home page</h1>');
// });
// // app.get('*', (req, res) => {
// //   res.status(404).send('<h1>This page is not found</h1>');
// // });//ต้องเป็น method get ทุก path
// app.use((req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

//Lab 2.6
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './pages/index.html'));
// });
// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, './pages/home.html'));
// });
// app.get('*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, './pages/notfound.html'));
// });

//Lab 2.7
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './pages/main.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, './pages/login.html'));
// }),
//   app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, './pages/register.html'));
//   });

// app.post('/submit-login', (req, res) => {
//   res.redirect('/');
// });
// app.post('/submit-register', (req, res) => {
//   res.redirect('/');
// });

app.listen(8800, () => {
  console.log('listening on port 8800');
});
