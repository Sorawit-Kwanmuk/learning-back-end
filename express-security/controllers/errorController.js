module.exports = (err, req, res, next) => {
  console.log(err);

  let code;
  let message;

  if (err.name === 'TokenExpiredError') {
    code = 401;
  }

  if (err.name === 'SequelizeValidationError') {
    code = 400;
  }
  if (err.name === 'SequelizeUniqueConstraintError') {
    message = 'Username or email is already in use';
    // return res.status(400).json({
    //   message: 'Username or email is already in use',
    // });
  }

  if (err.name === 'JsonWebTokenError') {
    code = 401;
    // res.status(401).json({
    //   message: err.message,
    // });
  }
  //   res.status(500).json({
  //     message: err.message,
  //   });
  res.status(code || err.code || 500).json({
    message: message || err.message,
  });
};
