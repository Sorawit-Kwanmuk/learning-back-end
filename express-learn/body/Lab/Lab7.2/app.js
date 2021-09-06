const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

//เพื่อค้นหา เพิ่ม แก้ไข ลบข้อมูล todo lists
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//create data
app.post('/create-data', async (req, res, next) => {
  const body = req.body;
  const newTodoLists = {
    id: uuidv4(),
    lists: body.lists,
    complete: body.complete,
    dueDate: body.dueDate,
  };
  const data = await fs.readFile('./dbs/todoLists.json', 'utf-8');
  const todosArray = JSON.parse(data);
  todosArray.push(newTodoLists);
  await fs.writeFile('./dbs/todoLists.json', JSON.stringify(todosArray));
  res.send(todosArray);
});

app.listen(2300, () => {
  console.log('listening on port 2300');
});
