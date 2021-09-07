const e = require('express');
const express = require('express');
const app = express();
const { readFile, writeFile } = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routing for getting,finding Todo
app.get('/', async (req, res, next) => {
  try {
    const result = await readFile('./dbs/todoLists.json');
    const arrTodo = JSON.parse(result);
    res.status(200).json({ result: arrTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Routing for Creating Todo
app.post('/create', async (req, res, next) => {
  try {
    const body = req.body; // ได้เป็น key , value {key1:value1,key2:value2}
    //validate data
    //ไม่เป็น 0 null emptyString undefind
    // if (body.list === undefined) {
    //   res.status(400).send('list is required');
    // } else if (typeof body.list !== 'string') {
    //   res.status(400).send({ message: 'list must be a string' });
    // } else if (body.list.trim() === '') {
    //   res.status(400).send({ message: 'list must not be empty' });
    // }  else if (typeof body.completed !== undefined || typeof body.list !== 'boolean') {
    //   res.status(400).send('completed must be a boolean');
    // }

    if (
      body.list === undefined ||
      typeof body.list !== 'string' ||
      body.list.trim() === ''
    ) {
      res
        .status(400)
        .json({ message: 'list is required and must be a string' });
    } else if (
      typeof body.completed !== 'undefined' &&
      typeof body.list !== 'boolean'
    ) {
      res
        .status(400)
        .send({ message: 'list is required and must be a boolean' });
    } else {
      const newTodo = {
        id: uuidv4(),
        list: body.list,
        completed: body.completed || false,
        dueDate: isNaN(new Date(body.dueDate).getTime()) ? null : body.dueDate,
      };
      const result = readFile('./dbs/todoLists.json', 'utf8');
      const arrTodo = JSON.parse(await result); //แปลงข้อมูลจาก json string เป็น array
      arrTodo.push(newTodo); //เพิ่มข้อมูลใหม่ใน array
      await writeFile('./dbs/todoLists.json', JSON.stringify(arrTodo)); //เพิ่มข้อมูลใหม่ใน json เป็น string
      res.status(201).json({ result: newTodo });
      // res.status(201).json({message: 'Create todo successfully'});
    }
  } catch (error) {
    res.status(500).send({ result: newTodo });
  }
});

//Routing for Updating Todo
//สามารถส่งข้อมูล ผ่าน query body หรือ params
//ทดลองส่งผ่าน query และ body
// PUT /edit?id=5f0f8f8f-f8f8-4f8f-8f8f-8f8f8f8f8f8f&list=newList&completed=true&dueDate=2020-08-08
//http://localhost:2300/edit?id=c17e5962-a9f7-4253-973f-aade32444611
//ถึงจะแก้แค่ตัวเดียว ก็ต้องส่งค่าไปทุก key value
app.put('/edit', async (req, res, next) => {
  try {
    const query = req.query;
    // const { id } = req.query;
    const body = req.body;
    // const { list, dueDate, completed } = req.query;
    if (
      body.list === undefined ||
      typeof body.list !== 'string' ||
      body.list.trim() === ''
    ) {
      res
        .status(400)
        .json({ message: 'list is required and must be a string' });
    } else if (
      typeof body.completed !== 'undefined' &&
      typeof body.list !== 'boolean'
    ) {
      res
        .status(400)
        .send({ message: 'list is required and must be a boolean' });
    } else {
      const result = await readFile('./dbs/todoLists.json', 'utf8');
      const arrTodo = JSON.parse(result);
      const index = arrTodo.findIndex(item => item.id === query.id);
      if (index !== -1) {
        arrTodo[index].list = {
          id: query.id,
          list: body.list,
          completed: body.completed || false,
          dueDate: isNaN(new Date(body.dueDate).getTime())
            ? null
            : body.dueDate,
        };
        await writeFile('./dbs/todoLists.json', JSON.stringify(arrTodo));
        res.status(200).json({ message: 'Successfully update' });
      } else {
        res.status(404).json({ message: 'Todo with this id is Not Found' });
      }
    }
  } catch (error) {
    res.status(500).send({ result: newTodo });
  }
});

//Routing for Deleting Todo
app.delete('/delete/:id', async (req, res, next) => {
  //ส่งข้อมูลที่จะลบ ผ่าน path paramiter ต้องใส่ path paramiter ด้วย
  try {
    const params = req.params; // {id: 'id'}
    console.log(params);
    //http://localhost:2300/delete/59742
    //{ id: '59742' }
    const result = await readFile('./dbs/todoLists.json', 'utf8');
    const arrTodo = JSON.parse(result);
    const index = arrTodo.findIndex(item => item.id === params.id);
    if (index !== -1) {
      // ถ้ามีตรงกับ id จะได้ค่า index ของตัวนั้นมา
      arrTodo.splice(index, 1);
      await writeFile('./dbs/todoLists.json', JSON.stringify(arrTodo));
      res.status(204).json({ message: 'Delete todo successfully' });
    } else {
      //ถ้าหา id ที่ตรงไม่เจอ จะได้ค่า index -1
      res.status(400).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(2300, (req, res, next) => {
  console.log('listening on port 2300');
});
