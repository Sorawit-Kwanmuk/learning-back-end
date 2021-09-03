const express = require('express');
const app = express();
//Error-dandling middleware
//ทำงานก็ต่อเมื่อ เกิด error ขึ้นเท่านั้น
//ส่วนใหญาจะอยู่ล้านล่างสุดก่อง app.listen()
//http://localhost:4000/products ใน postman
const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
  throw new Error('Throw error from Get /products');
  //   throw new CustomError('Throw error from Get /products', 404);

  //   res.send('Get /products');
});
productRouter.post('/', (req, res, next) => {
  try {
    //connect to database to create new product
    //asynchronous operation
  } catch (err) {
    next(err); //ถ้ามเกิด error จะไปทำงานที่ error-handling-middleware ทันที
  }
});
productRouter.put('/', (req, res, next) => {});
productRouter.delete('/', (req, res, next) => {});

app.use('/products', productRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  //   res.status(500).send({ message: err.message });
  res.status(err.statusCode || 500).send({ message: err.message });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
