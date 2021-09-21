const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  //การสร้าง Obj จาก class Sequelize
  host: 'localhost',
  username: 'root',
  password: 'sorawitk41',
  database: 'todo_sequelize',
  dialect: 'mysql',
});
//วิธีเช็คว่า connect database สำเร็จหรือไม่
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch(err => {
//     console.log('Unable to connect to the database:', err);
//   });

//Table User
// - Id
// - Email
// - Password
// - first_name
// - last_name

//Table List
// - Id
// - Title
// - Completed
// - due_date
// - user_id

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '123456',
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      //   field: 'fname', // สร้าง column firstName เป็นชื่อ fname แต่ชื่อ key ใน model ยังตงเป็น firstName
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // tableName: 'person', //rename table
    // timestamps: false, //จะไม่มี column created_at และ updated_at
    // freezeTableName: true,
    underscored: true, //map ชื่อ column จาก firstName เป็น first_name
  }
);

const List = sequelize.define(
  'List',
  {
    // id ที่เป็น primary key ไม่ต้องเขียนก็ได้ มันจะสร้างให้เอง ในกรณีที่ใน column ใน model
    //ไม่มีตัวไหนเป็น primary key เลย
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //   due_date: {
    //     type: DataTypes.DATEONLY,
    //   },
    //shorthand
    dueDate: DataTypes.DATEONLY,
  },
  {
    underscored: true,
  }
);

//ทำการ sync model ที่ออกแบบไว้ด้านบน กับ database
//force: true, คือสั่งให้ drop ข้อมูลทั้งหมดใน database แล้ว เขียนขึ้นใหม่ตาม model
//ใช้ตอนสร้าง project ใหม่ที่ยังไม่มี table database

// sequelize.sync({
//   force: true,
//   //   force: false,
// });

//convert to JSON
// User.findOne({
//   where: {
//     id: 1,
//   },
// })
//   .then(user => {
//     console.log(JSON.stringify(user, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });

//ตัวอย่างการ map กับ table ที่มีข้อมูลอยู่แล้ว คือชุด key column ต้องตรงกับของเดิม
// const Account = sequelize.define(
//   'Account',
//   {
//     id: {
//       type: DataTypes.INTEGER, //ดู type จาก table เก่าที่ต้องการ mapping (ต้องตรงกัน)
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//       field: 'ACCOUNT_ID', // ชื่อ column เก่า
//     },
//     availBalance: {
//       type: DataTypes.FLOAT,
//       defaultValue: null,
//       field: 'AVAIL_BALANCE',
//     },
//   },
//   {
//     tableName: 'account', //rename table
//   }
// );

module.exports = {
  sequelize,
  User,
  List,
};
