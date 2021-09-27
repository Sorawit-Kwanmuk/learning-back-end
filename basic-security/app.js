// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const password = '123456';
// const hashedToCheck =
//   '$2a$20$tHw.d7BYKRAArIU3km9XuunSqm.fWbBYwb8a/9iCI79.llrrx3/WC';
// '$2a$12$AK/aXq2VxHrxaHcxLoo4leCBt0TIHAmJ40y4E5pquztGG.mOTfLLC';

//payload
const payload = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const secretKey = 'secretKey';

const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 24 });
// const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });
// console.log(token);

try {
  const decodedPayload = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJhZ2UiOjMwLCJpYXQiOjE2MzI3MjkwMjksImV4cCI6MTYzMjgxNTQyOX0.UKywLhRksNYJtsMa-AEw1GOAwVCHIOeCvT5K9A5dW9M',
    'secretKey'
  );
  console.log(decodedPayload);
} catch (error) {
  console.log(error);
}

const run = async () => {
  //   const hashedPassword = await bcrypt.hash(password, 12); //12 คือตัวหน่วงเวลา ยิ่งมากยิ่งทำงานนาน ใช้เวลายิ่งนาน
  //   console.log(hashedPassword);
  //------------------------------------------------------------------------------------------------------------
  // const isCorrectPassword = await bcrypt.compare(password, hashedToCheck);
  // console.log(isCorrectPassword);
  //------------------------------------------------------------------------------------------------------------
};

// run();
