const e = require('express');
const express = require('express');
const app = express();
const { readFile, writeFile } = require('fs/promises');
const { v4: uuidv4 } = require('uuid');
const todoRouter = require('./routes/todoRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

app.listen(2200, () => {
  console.log('listening on port 2200');
});
