const express = require('express');
const app = express();
const path = require('path');
const { nextTick } = require('process');

app.use((req, res, next) => {
  const { payee, amount } = req.body;
  if (!payee) {
    res.status(400).send('Payee is required');
  } else if (!amount || isNaN(amount) || amount < 0) {
    res.status(400).send('Amount is required');
  } else {
    next();
  }
});

app.post('/transaction', (req, res) => {});

app.put('/', (req, res) => {});

app.listen(7777, () => {
  console.log('listening on port 8800');
});
