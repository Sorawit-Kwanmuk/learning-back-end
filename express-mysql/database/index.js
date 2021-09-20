const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sorawitk41',
  database: 'todo_mysql',
  connectionLimit: 10,
});

const execute = async (sql, params) => {
  const result = await connection.execute(sql, params);
  return result[0];
};

module.exports = { connection, execute };
