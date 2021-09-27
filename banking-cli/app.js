const express = require('express');

const customerRoute = require('./routes/customerRoute');
const branchRoute = require('./routes/branchRoute');
const accountRoute = require('./routes/accountRoute');

const app = express();

//parse request body to object and store in req.body
app.use(express.json());

//config where to store static files
app.use(express.static('public'));

//config routing
//Customer CRUD routes
app.use('/customers', customerRoute);
//Branch CRUD routes
app.use('/branches', branchRoute);
//Account CRUD routes
app.use('/accounts', accountRoute);

//handle path and method not found (path and method are not defined)
app.use((req, res, next) => {
  res.status(404).json({ message: 'This resource does not found' });
});
//handle all error in the application
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(1111, () => {
  console.log('Server is running on port 1111');
});
