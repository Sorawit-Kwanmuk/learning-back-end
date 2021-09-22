const { Op } = require('sequelize');
const { User } = require('./database');

//instantiate the user model
// const objUser = new User(); // ไม่แนะน้ให้ใช้

//แนะนำวิธีนี้
// const user = User.build({
//   // build คือ static method เรียกใช้ methord จากชื่อ class โดยตรง
//   email: 'john',
//   firstName: 'John',
//   lastName: 'Doe',
// });

// console.log(user);
// console.log(
//   '======================================================================================'
// );
// console.log(user.toJSON());
// console.log(
//   '======================================================================================'
// );
// console.log(JSON.stringify(user));
// console.log(
//   '======================================================================================'
// );
// console.log(JSON.stringify(user, null, 2));
// ผลลัพธ์คือ
// User {
//   dataValues: { id: null, email: 'john', firstName: 'John', lastName: 'Doe' },
//   _previousDataValues: { email: undefined, firstName: undefined, lastName: undefined },
//   _changed: Set(3) { 'email', 'firstName', 'lastName' },
//   _options: { isNewRecord: true, _schema: null, _schemaDelimiter: '' },
//   isNewRecord: true
// }
// ======================================================================================
// { id: null, email: 'john', firstName: 'John', lastName: 'Doe' }
// ======================================================================================
// {"id":null,"email":"john","firstName":"John","lastName":"Doe"}
// ======================================================================================
// {
//   "id": null,
//   "email": "john",
//   "firstName": "John",
//   "lastName": "Doe"
// }

//********************** USING INSTANCE METHODS **************************

//insert row using instance
// เซฟข้อมูลลงใน database
// const create = async () => {
//   const user = User.build({
//     // build คือ static method เรียกใช้ methord จากชื่อ class โดยตรง
//     email: 'john@gmail.com',
//     password: '123456',
//     firstName: 'John',
//     lastName: 'Doe',
//   });
//   user.save(); // save is instance method (เรียกใช้ Method จากชื่อ class โดยตรง)
// };
// create();

//update row using instance
// const update = async () => {
//   const user = await User.findOne({ where: { id: 1 } });
//   console.log(user.toJSON());
//   user.email = 'Joe@gmail.com';
//   user.firstName = 'Joe';
//   user.save(); //save ทำได้ทั้ง create และ update โดยที่ถ้ามี id อยู่แล้ว จะ update แต่ถ้าไม่มีค่าid นั้นมันจะ create
// };
// update();

//delete row using instance
// const del = async () => {
//   const user = await User.findOne({ where: { id: 1 } });
//   console.log(user.toJSON());
//   user.email = 'Joe@gmail.com';
//   user.destroy();
// };
// del();

//********************** USING STATIC METHODS **************************
// create row using static method
// const staticCreate = async () => {
//   const newUser = await User.create({
//     email: 'test5@gmail.com',
//     password: '123459876546',
//     firstName: 'test5',
//     lastName: 'test5',
//   });
//   console.log(newUser.toJSON());
// };
// staticCreate();

//update row using static method
// const staticUpdate = async () => {
//   const result = await User.update(
//     {
//       firstName: 'John',
//       lastName: 'Connor',
//     },
//     {
//       where: { id: 2 },
//     }
//   );
//   console.log(result);
// };
// staticUpdate();

//delete row using static method
// const staticDel = async () => {
//   const result = await User.destroy({ where: { id: 2 } });
//   console.log(result);
// };
// staticDel();

// create multiple records using bulkCreate
// const multipleCreate = async () => {
//   await User.bulkCreate([
//     {
//       email: 'Jack@gmail.com',
//       firstName: 'Jack',
//       lastName: 'Sparrpow',
//     },
//     {
//       email: 'devid@gmail.com',
//       firstName: 'Devid',
//       lastName: 'Town',
//     },
//     {
//       email: 'roy@gmail.com',
//       firstName: 'Roy',
//       lastName: 'Maximus',
//     },
//     {
//       email: 'Will@gmail.com',
//       firstName: 'Will',
//       lastName: 'Smith',
//     },
//   ]);
// };
// multipleCreate();

//************************** SELECT QUERY **************************************** */
//select All column
// const selectAll = async () => {
//   const result = await User.findAll();
//   console.log(JSON.stringify(result, null, 2));
// };
// selectAll(); // array ของ object ของ model ที่ map ไปที่ table นั้น

//select some column
// const selectColumn = async () => {
//   const result = await User.findAll({
//     attributes: ['email', 'firstName', ['created_at', 'createTime']], //เปลี่ยนชื่อที่แสดงผลจาก created_at เป็น createTime
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectColumn();

// ไม่เอาบาง column เอาที่เหลือทั้งหมด
// const selectExcep = async () => {
//   const result = await User.findAll({
//     // attributes: ['email', 'firstName', 'createdAt','updatedAt'],
//     attributes: { exclude: ['id'] },
//   }); // exclude คือ ไม่ต้องเอา column ไหนมา แล้วเอา column ที่เหลือทั้งหมดมา
//   console.log(JSON.stringify(result, null, 2));
// };
// selectExcep();

// select using and in where clause
// const selectWhereClauseAnd = async () => {
//   const result = await User.findAll({
//     where: {
//       id: 6,
//       firstName: 'Peter', //มีค่าเท่ากับ id=3 && firstName=Peter
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseAnd();

// select using or in where clause
//Op ย่อมาจาก Operator
// const selectWhereClauseOr = async () => {
//   const result = await User.findAll({
//     where: {
//       [Op.or]: [{ id: 6 }, { id: 9 }], //มีค่าเท่ากับ id=3 || id=9
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOr();

//Op.gt =
//Op.gte >=
//Op.lt <
//Op.lte <=
//Op.between  ระหว่าง
//Op.notBetween ไม่อยู่ระหว่าง
// https://sequelize.org/master/manual/model-querying-basics.html

// using OP
// const selectWhereClauseOpLike = async () => {
//   const result = await User.findAll({
//     where: {
//       lastName: {
//         [Op.like]: 'M%',
//         // [Op.like]: '%M',
//         // [Op.like]: '%M%',
//       },
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };

// selectWhereClauseOpLike();
// const selectWhereClauseOpStartWith = async () => {
//   const result = await User.findAll({
//     where: {
//       lastName: {
//         [Op.startsWith]: 'M',
//       },
//     },
//     attributes: ['firstName', 'lastName', 'email'],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOpStartWith();

//ชื่อขึ้นต้นด้วยJ หรือ นามสกุลขึ้นต้นด้วย S
// const selectWhereClauseOpMix = async () => {
//   const result = await User.findAll({
//     where: {
//       [Op.or]: [
//         {
//           firstName: {
//             [Op.startsWith]: 'J',
//           },
//         },
//         {
//           lastName: {
//             [Op.startsWith]: 'S',
//           },
//         },
//       ],
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOpMix();

//id = 6 or id = 7 or id = 9
// const selectWhereClauseOp1 = async () => {
// //   const result = await User.findAll({
// //     where: {
// //       [Op.or]: [
// //         {
// //           id: 6,
// //         },
// //         {
// //           id: 7,
// //         },
// //         {
// //           id: 9,
// //         },
// //       ],
// //     },
// //   });
//   const result = await User.findAll({
//     where: {
//       id: [6, 7, 8], //sequelize จะ convert id = เป็น id in
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOp1();

//id >= 7
// const selectWhereClauseOp2 = async () => {
//   const result = await User.findAll({
//     where: {
//       id: {
//         [Op.gte]: 7,
//       },
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOp2();

//id < 7 or > 13
// const selectWhereClauseOp3 = async () => {
//   const result = await User.findAll({
//     where: {
//       [Op.or]: [
//         {
//           id: {
//             [Op.lt]: 7,
//           },
//         },
//         {
//           id: {
//             [Op.gt]: 13,
//           },
//         },
//       ],
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOp3();

//id between 7 and 9
// const selectWhereClauseOp4 = async () => {
//   const result = await User.findAll({
//     where: {
//       id: {
//         [Op.between]: [7, 9],
//       },
//     },
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// selectWhereClauseOp4();
