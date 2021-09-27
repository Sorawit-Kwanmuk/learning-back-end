const { Op, Sequelize, QueryTypes } = require('sequelize');
const {
  Customer,
  Branch,
  Account,
  Transfer,
  sequelize,
} = require('./database');

// const runCustomer = async () => {
//   const result = await Customer.findAll();
//   console.log(JSON.stringify(result, null, 2));
// };
// runCustomer();
// const runBranch = async () => {
//   const result = await Branch.findAll();
//   console.log(JSON.stringify(result, null, 2));
// };
// runBranch();
// const runAccounts = async () => {
//   const result = await Account.findAll();
//   console.log(JSON.stringify(result, null, 2));
// };
// runAccounts();

//Order Customer by firstName
// const startCustomer = async () => {
//   const result = await Customer.findAll({
//     // order: ['firstName', 'lastName'],
//     order: [
//       ['firstName', 'DESC'],
//       ['lastName', 'DESC'],
//     ],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// startCustomer();

//Order Branch name DESC
// const lab1 = async () => {
//   const result = await Branch.findAll({
//     order: [['name', 'DESC']],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// lab1();

//ODER Account balance DESC balance > 5000
// const lab2 = async () => {
//   //เป็น Oject where กับ Order อันไหนขึ้นก่อนก็ได้ ไม่ต้องเลืองลำดับ
//   const result = await Account.findAll({
//     where: {
//       balance: { [Op.gt]: 5000 },
//     },
//     order: [['balance', 'DESC']],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// lab2();

//********************** Group by ****************************** */
// const groupBy = async () => {
//   //   const result = await Customer.findAll({
//   //******************* attributes+Rename ******************************* */
//   // attributes: ['firstName', ['last_Name', 'lname']],
//   //   });
//   //*********select gender, COUNT(gender) from customer group by gender
//   const result = await Customer.findAll({
//     group: ['gender'],
//     // attributes: ['gender', Sequelize.fn('Count', Sequelize.col('gender'))],
//     //Sequelize.fn('Count', Sequelize.col('gender')) มันไม่สามารถ  แปลงสิ่งนี้เป็น key ได้จึงต้องตั้งชื่อให้มันนำไปใช้เป็น key
//     attributes: [
//       'gender',
//       [Sequelize.fn('Count', Sequelize.col('gender')), 'count'],
//     ],
//     //order by count
//     order: [Sequelize.fn('Count', Sequelize.col('gender'))],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// groupBy();

// หา total balance ของแต่ละ customer_id
// const groupByLab1 = async () => {
//   const result = await Account.findAll({
//     group: ['customer_id'],
//     attributes: [
//       'customer_id',
//       [Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance'],
//     ],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// groupByLab1();

// หา total balance ของแต่ละ branch_id
// const groupByLab2 = async () => {
//   const result = await Account.findAll({
//     group: ['branch_id'],
//     attributes: [
//       'branch_id',
//       [Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance'],
//     ],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// groupByLab2();

// หา total balance ของแต่ละ branch_id, customer_id
// const groupByLab3 = async () => {
//   const result = await Account.findAll({
//     group: ['branch_id', 'customer_id'],
//     attributes: [
//       'branch_id',
//       'customer_id',
//       [(Sequelize.fn('SUM', Sequelize.col('balance')), 'total_balance')],
//     ],
//   });
//   console.log(JSON.stringify(result, null, 2));
// };
// groupByLab3();

//***************************** LIMIT OFFEST  ******************************************************** */
// const limitOffset = async () => {
//   const result = await Customer.findAll({
//     limit: 5,
//     offset: 10,
//   });
// };
// limitOffset();

// const afterRelationDatabase = async () => {
//   //   const result = await Customer.findAll({
//   // where: {
//   //   id: 1,
//   // },
//   // include: Account, //เรียก account ที่มี relation กับ customer
//   //   });
//   //-----------------------------------------------------------------
//   //   const result = await Account.findAll({
//   //     where: {
//   //       id: 1,
//   //     },
//   //     attributes: ['id', 'openDate', 'closeDate', 'balance'],
//   //     // include: Customer, //include = join table
//   //     include: {
//   //       model: Customer,
//   //       attributes: {
//   //         exclude: ['createdAt', 'updatedAt'],
//   //       },
//   //     },
//   //   });
//   //-----------------------------------------------------------------
//   //   const result = await Branch.findAll({
//   //     where: { id: 1 },
//   //     // include: Account,
//   //     include: {
//   //       model: Account,
//   //       include: Customer,
//   //     },
//   //   });
//   //-----------------------------------------------------------------
//   //include Multiple model
//   //   const result = await Customer.findAll({
//   //     where: { id: 1 },
//   //     include: [Account, Branch],
//   //   });
//   //Filter nested model
//   //   const result = await Customer.findAll({
//   //     where: { id: 1 },
//   //     include: [
//   //       { model: Account, where: { balance: { [Op.lt]: 10000 } } },
//   //       Branch,
//   //     ],
//   //   });

//   //Filter nested model #2
//   //   const result = await Customer.findAll({
//   //     where: {
//   //       id: 1,
//   //       '$Accounts.balance$': {
//   //         [Op.lt]: 10000,
//   //       },
//   //     },
//   //     include: [Account, Branch],
//   //   });

//   //Order nested model
//   //ให้เลือกเฉพาะ id, firstName, lastName ของ customer, balance ของ account,ชื่อสาขาของ account
//   //   const result = await Customer.findAll({
//   //     attributes: ['id', 'firstName', 'lastName'],
//   //     include: {
//   //       model: Account,
//   //       attributes: ['balance'],
//   //       include: {
//   //         model: Branch,
//   //         attributes: ['name'],
//   //       },
//   //     },
//   //   });

//   //ให้เขียนดึงข้อมูลบัญชีที่ balance มากกว่า 10000 โดยให้ดึงชื่อสาขาชื่อลูกค้า
//   //และมีเงื่อนไขว่าชื่อลูกค้ามีตัว t อยู่ในชื่อและให้เรียง balance จากมากไปน้อย
//   //   const result = await Account.findAll({
//   //     where: {
//   //       balance: {
//   //         [Op.gt]: 10000,
//   //       },
//   //     },
//   //     attributes: ['balance'],
//   //     include: [
//   //       {
//   //         model: Customer,
//   //         attributes: ['firstName'],
//   //         where: {
//   //           firstName: {
//   //             [Op.like]: '%t%',
//   //           },
//   //         },
//   //       },
//   //       {
//   //         model: Branch,
//   //         attributes: ['name'],
//   //       },
//   //     ],
//   //   });

//   //*********************** self join *********************************** */
// //   const result = await Transfer.findAll({
// //     //self join
// //     //เขียนแบบ short hand
// //     // include: ['ToAccount', 'FromAccount'],
// //     //เขียนแบบ เต็ม
// //     include: [
// //       {
// //         model: Account,
// //         as: 'ToAccount',
// //         attributes: ['id', 'balance'],
// //       },

// //       {
// //         model: Account,
// //         as: 'FromAccount',
// //       },
// //     ],
// //   });

//   console.log(JSON.stringify(result, null, 2));
// };
// afterRelationDatabase();

//******************************************* Raw Query ********************************************************* */
// const rawQuery = async () => {
//   //หา Sum ของ balance และชื่อ ในแต่ละบัญชี
//   const sql =
//     'select c.first_name as first_name, sum(balance) as total From accounts a left join customers c on a.customer_id = c.id group by c.id';
//   const arrResult = await sequelize.query(sql, { type: QueryTypes.SELECT });

//   console.log(JSON.stringify(arrResult, null, 2));
// };

// rawQuery();
