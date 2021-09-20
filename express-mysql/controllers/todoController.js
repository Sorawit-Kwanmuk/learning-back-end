const database = require('../database');

exports.getAllTodos = async (req, res, next) => {
  try {
    const result = await database.execute('SELECT * FROM lists');
    res.json({ todos: result });
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title, completed, dueDate } = req.body;
    //validate input
    if (!title || !completed || !dueDate) {
      res.status(400).send('Missing required fields');
    }
    const result = await database.execute(
      `insert into lists (title,completed,due_date) values(?,?,?)`,
      [title, completed, dueDate]
    );
    res.status(201).json({ todo: result.insertId, title, completed, dueDate });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed, dueDate } = req.body;
    //validate input
    if (!title || !completed || !dueDate) {
      res.status(400).send('Missing required fields');
    }
    const result = await database.execute(
      `update lists set title = ?, completed = ?, due_date = ? where id = ?`,
      [title, completed, dueDate, id]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: 'cannot update todo with this id' });
    }
    res.status(200).json({ todo: { id, title, completed, dueDate } });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await database.execute(`delete from lists where id = ?`, [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: 'cannot delete todo with this id' });
    }
    res.status(204);
  } catch (err) {
    next(err);
  }
};
