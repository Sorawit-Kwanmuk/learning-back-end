class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;

//new Error('Internal')
// new CustomError('Internal error', 500);
