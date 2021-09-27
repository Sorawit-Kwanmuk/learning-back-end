const { Sequelize, DataTypes } = require('sequelize');
const database = {};

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'sorawitk41',
  database: 'test_lab',
  dialect: 'mysql',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

database.User = require('./User')(sequelize, DataTypes);

// sequelize.sync({ force: false });

database.sequelize = sequelize;
module.exports = database;
