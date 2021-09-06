const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res, next) => {
  const query = req.query;
  const { name, age, address } = query;
  console.log(query);
});

app.listen(8700, () => {
  console.log('listening on port 8700');
});
