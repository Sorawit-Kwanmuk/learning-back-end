const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

//การทำ routeing
app.get('/', todoController.getIndex);
app.get('/create-todo', todoController.getCreatePage);
app.post('/create-todo', todoController.createTodo);

app.listen(8123, () => {
  console.log('Server is running on port 8123');
});
