const { readFile, writeFile } = require('fs/promises');
const { v4: uuidv4 } = require('uuid');

const readTodo = async () => {
  const data = await readFile('dbs/todoLists.json');
  return JSON.parse(data);
  //ทุกฟังก์ชั่นที่ใช้ async function จะ return ค่าเป็น promise object
  //ต้อมมี resolve ถึงจะ return JSON.parse(data);
};
// const saveTodo = async data => {
//   await writeFile('dbs/todoLists.json', JSON.stringify(data));
// };
//ค่าที่ return เป็น promist อยู่แล้วไม่ต้องใส่ async ก็ได้
const saveTodo = data => writeFile('dbs/todoLists.json', JSON.stringify(data));
const validateTodo = todo => {
  const { list, completed, dueDate } = todo;
  if (list === undefined) {
    return {
      message: 'list is required ',
    };
  }
  if (typeof list !== 'string') {
    return {
      message: 'list must be a string',
    };
  }
  if (!list.trim()) {
    return {
      message: 'list is required ',
    };
  }
  if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
    return {
      message: 'completed must be a boolean',
    };
  }
  if (typeof dueDate !== 'undefined' && typeof dueDate !== 'string') {
    return {
      message: 'dueDate must be a string',
    };
  }
  if (dueDate && isNaN(new Date(dueDate).getTime())) {
    return {
      message: 'invalid format date string',
    };
  }
  return '';
};

exports.checkExistTodoId = async (req, res, next) => {
  const { id } = req.params;
  const todos = await readTodo();
  const index = todos.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(400).json({ message: 'invalid todo id' });
  }
  req.todos = todos; //เพิ่ม key value  todos,index ไปให้กับ middilware ตัวถัดไป
  req.index = index;
  next();
};

exports.validateTodo = (req, res, next) => {
  const validateError = validateTodo(req.body);
  if (validateError) {
    return res.status(400).json({ message: validateError.message });
  }
  next();
};

exports.getAllTodo = async (req, res, next) => {
  try {
    const { list, completed } = req.query;
    const todos = await readTodo();
    const filteredTodos = todos.filter(
      item =>
        (list === undefined ||
          item.list.toLowerCase().includes(list.toLowerCase())) &&
        (completed === undefined ||
          !['true', 'false'].includes(completed.toLowerCase()) ||
          '' + item.completed === completed)
    );
    res.status(200).json({ data: filteredTodos });
  } catch (error) {
    next(error);
  }
};
exports.getTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todos = await readTodo();
    const foundTodo = todos.find(item => item.id === id);
    // if (!foundTodo) {
    //   res.status(200).json({ todo: null });
    // }
    // res.status(200).json({ foundTodo });

    res.status(200).json({ data: foundTodo ?? null });
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { list, completed, dueDate } = req.body;

    const todos = await readTodo();
    const todo = {
      id: uuidv4(),
      list,
      completed: completed ?? false,
      dueDate: dueDate ? new Date(dueDate) : null,
    };
    todos.push(todo);
    await saveTodo(todos);
    res.status(201).json({ data: todo });
  } catch (error) {
    next(error);
  }
};
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { list, completed, dueDate } = req.body;

    const { todos, index } = req;

    todos[index] = {
      id,
      list,
      completed: completed ?? todos[index].completed,
      dueDate: dueDate ? new Date(dueDate) : null,
    };
    await saveTodo(todos);
    res.status(200).json({ data: todos[index] });
  } catch (error) {
    next(error);
  }
};
exports.deleteTodo = async (req, res, next) => {
  try {
    const { todos, index } = req;
    todos.splice(index, 1);
    await saveTodo(todos);
    res.status(204).json({ message: 'todo is deleted' });
  } catch (error) {
    next(error);
  }
};

// exports.getTodoByFilter = async (req, res, next) => {
//   try {

//   } catch (error) {
//     next(error);
//   }
// };
