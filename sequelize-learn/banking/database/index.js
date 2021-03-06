const { Sequelize, DataTypes } = require('sequelize');
const database = {};

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'sorawitk41',
  database: 'banking_test',
  dialect: 'mysql',
});
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch(err => {
//     console.log('Unable to connect to the database:', err);
//   });

// const createCustomerModel = require('./Customer');
// const Customer = createCustomerModel(sequelize, DataTypes);

// const Customer = require('./Customer')(sequelize, DataTypes);
// const Branch = require('./Branch')(sequelize, DataTypes);
// const Account = require('./Account')(sequelize, DataTypes);
// const Transfer = require('./Transfer')(sequelize, DataTypes);

database.Customer = require('./Customer')(sequelize, DataTypes);
database.Branch = require('./Branch')(sequelize, DataTypes);
database.Account = require('./Account')(sequelize, DataTypes);
database.Transfer = require('./Transfer')(sequelize, DataTypes);

// database.Customer.associate(database);
// database.Branch.associate(database);
// database.Account.associate(database);
// database.Transfer.associate(database);

for (let model of Object.keys(database)) {
  if (database[model]) database[model].associate(database);
}

// const Customer = sequelize.define(
//   'Customer',
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gender: {
//       type: DataTypes.ENUM('MALE', 'FEMALE'),
//     },
//     birth_date: {
//       type: DataTypes.DATEONLY,
//     },
//     address: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     underscored: true,
//   }
// );

// const Branch = sequelize.define(
//   'Branch',
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   {
//     underscored: true,
//   }
// );

// const Account = sequelize.define(
//   'account',
//   {
//     openDate: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     closeDate: {
//       type: DataTypes.DATEONLY,
//     },
//     balance: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//     },
//   },
//   {
//     underscored: true,
//   }
// );

// const Transfer = sequelize.define(
//   'Transfer',
//   {
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.DECIMAL(15, 2),
//       allowNull: false,
//     },
//   },
//   {
//     underscored: true,
//   }
// );

// Assume Customer - Account relationship 1:1
// Customer.hasOne(Account);
// Account.belongsTo(Customer); // fk ???????????????????????????????????????????????????????????????????????????????????? BelongsTo

// Account.hasOne(Customer);
// Customer.belongsTo(Account); // fk ????????????????????? table Customers

//Customer 1:Many Account
//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????? join ??????????????????
// Customer.hasMany(Account, {
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false,
//   },

//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// }); //default ?????? fk ?????????????????????????????? table ????????? singular ?????????????????????_id (customerId) (underscore is true)
// Account.belongsTo(Customer, {
//   foreignKey: {
//     name: 'customerId',
//     allowNull: false,
//   },

//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// });

// Branch.hasMany(Account, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false,
//   },

//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// });
// Account.belongsTo(Branch, {
//   foreignKey: {
//     name: 'branchId',
//     allowNull: false,
//   },

//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// });

//********************************* Many : Many ******************************************* */
// A.belongsToMany(B, { through: C });
// B.belongsToMany(A, { through: C });

// as
//????????????????????????????????????????????? TransferIn
// Account.hasMany(Transfer, {
//   as: 'transferTos',
//   foreignKey: { name: 'toAccountId' },
//   allowNull: false,
//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// });
// Transfer.belongsTo(Account, {
//   as: 'ToAccount',
//   foreignKey: {
//     name: 'toAccountId',
//     allowNull: false,
//     onUpdate: 'RESTRICT',
//     onDelete: 'RESTRICT',
//   },
// });

//????????????????????????????????????????????? TransferOut
// Account.hasMany(Transfer, {
//   as: 'transferFroms',
//   foreignKey: { name: 'fromAccountId' },
//   allowNull: false,
//   onUpdate: 'RESTRICT',
//   onDelete: 'RESTRICT',
// });
// Transfer.belongsTo(Account, {
//   as: 'FromAccount',
//   foreignKey: {
//     name: 'fromAccountId',
//     allowNull: false,
//     onUpdate: 'RESTRICT',
//     onDelete: 'RESTRICT',
//   },
// });

//Branch m:n Customer
// Customer.belongsToMany(Branch, {
//   through: Account,
//   foreignKey: 'customerId',
//   otherKey: 'branchId',
// });
// Branch.belongsToMany(Customer, {
//   through: Account,
//   foreignKey: 'branchId',
//   otherKey: 'customerId',
// });

// sequelize.sync({ force: false });

database.sequelize = sequelize;
module.exports = database;
