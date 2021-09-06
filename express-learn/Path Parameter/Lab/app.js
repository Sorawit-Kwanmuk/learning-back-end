const express = require('express');
const app = express();
const path = require('path');
// /product/100/shop/200
// 100 is the path parameter
// 200 is the path parameter
// app.get('/product/:productId/shop/:shopId', (req, res, next) => {
//   //path parameter จะมีกี่ตัวก็ได้
//   const params = req.params; // { productId: '100', shopId: '200' }
//   console.log(params);
// });

// Lab6.1
app.get('/sum/:a/:b', () => {
  const { a, b } = req.params;
  console.log(a, b);
});

app.post('product/:id', (req, res, next) => {
  const { id } = req.params;
});

app.get('/user/:id/bookings/:bid', (req, res, next) => {
  const { id, bid } = req.params;
});

app.listen(1100, () => {
  console.log('listening on port 1100');
});
