const { readFile, writeFile } = require('fs');
exports.getAllTodo = async (req, res, next) => {
  try {
    const result = await readFile('../dbs/todoLists.json');
    const arrTodo = JSON.parse(result);
    res.status(200).json({ result: arrTodo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getTodoById = async (req, res, next) => {
  try {
  } catch (error) {}
};

exports.createTodo = async (req, res, next) => {
  try {
    const body = req.body;
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
      const result = readFile('../dbs/todoLists.json', 'utf8');
      const arrTodo = JSON.parse(await result);
      arrTodo.push(newTodo);
      await writeFile('../dbs/todoLists.json', JSON.stringify(arrTodo));
      res.status(201).json({ result: newTodo });
    }
  } catch (error) {
    res.status(500).send({ result: newTodo });
  }
};
exports.updateTodo = async (req, res, next) => {
  try {
    const query = req.query;
    const body = req.body;
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
      const result = await readFile('../dbs/todoLists.json', 'utf8');
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
        await writeFile('../dbs/todoLists.json', JSON.stringify(arrTodo));
        res.status(200).json({ message: 'Successfully update' });
      } else {
        res.status(404).json({ message: 'Todo with this id is Not Found' });
      }
    }
  } catch (error) {
    res.status(500).send({ result: newTodo });
  }
};
exports.deleteTodo = async (req, res, next) => {
  try {
    const params = req.params;
    console.log(params);
    const result = await readFile('../dbs/todoLists.json', 'utf8');
    const arrTodo = JSON.parse(result);
    const index = arrTodo.findIndex(item => item.id === params.id);
    if (index !== -1) {
      arrTodo.splice(index, 1);
      await writeFile('../dbs/todoLists.json', JSON.stringify(arrTodo));
      res.status(204).json({ message: 'Delete todo successfully' });
    } else {
      res.status(400).json({ message: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
