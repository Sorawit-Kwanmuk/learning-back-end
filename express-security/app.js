//คำสั่ง สร้าง table
// const { sequelize } = require('./models');
// sequelize.sync();

const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('./models');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(express.json());

//midldleware cors:allow access origin cross sharing
app.use(cors());

app.post('/register', async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //10 คือ salt
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User account has been created' });
  } catch (error) {
    next(error);
  }
});

app.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const { username, email, password } = req.body;
    //select * from users where username = username , password = password , email = email
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (!user) {
      //  if(user === null)
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const secretKey = 'secretKey';
    const token = jwt.sign(payload, secretKey, {
      expiresIn: '30d',
    });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
});

app.listen(8524, () => {
  console.log('Server is running on port 8524');
});
