const express = require('express');

const app = express();

// app.get('/users/profile', (req, res, next) => {});
// app.get('/users/birthDate', (req, res, next) => {});
// app.get('/users/create', (req, res, next) => {});
// app.get('/users/change-password', (req, res, next) => {});
// app.patch('/users/disable', (req, res, next) => {});
// app.delete('/users/delete', (req, res, next) => {});

const router = express.Router();
router.get('/profile', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น get path เป็น /user/profile
router.post('create', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น post path เป็น /user/create

//ถ้า req = user/profile => /users ตรง ไปทำงานที่ router ต่อ ว่ามีค่า /profile ถ้าตรงก็ไปทำงานใน middleware ของ routerที่กำหนดไว้
app.use('/users', router); //ถ้าเจอ path ที่ขึ้นต้นด้วย /users ไม่ว่าจะเป็น method ใดก็ตาม ให้ไปทำงานที่ router
app.use(
  '/bookings',
  //chaining middleware
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {}
);

app.get('/products', (req, res, next) => {});
app.post('/products', (req, res, next) => {});
app.put('/products', (req, res, next) => {});
app.delete('/products', (req, res, next) => {});

const productRouter = express.Router();
productRouter.get('/', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น get path เป็น /products
productRouter.post('/', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น post path เป็น /products
productRouter.put('/', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น put path เป็น /products
productRouter.delete('/', (req, res, next) => {}); //จะทำงานก็ต่อเมื่อ method เป็น delete path เป็น /products

app.use('/products', productRouter);

app.listen(7000, () => {
  console.log('Server running on port 8888');
});
