const express = require('express');
const app = express();
const path = require('path');

// /product/100
// 100 is the path parameter
app.get('/product/:productId', (req, res, next) => {
  // :productId คือการกำหนด path parameter
});
// /product/100/shop/200
// 100 is the path parameter
// 200 is the path parameter
app.get('/product/:productId/shop/:shopId', (req, res, next) => {
  //path parameter จะมีกี่ตัวก็ได้
  const params = req.params; // { productId: '100', shopId: '200' }
  console.log(params);
});

app.get('/shop-mobile/:shopId', (req, res, next) => {});

app.listen(1000, () => {
  console.log('listening on port 1000');
});
