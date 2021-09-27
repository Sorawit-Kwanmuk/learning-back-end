const { Account, Branch, Customer } = require('../models');

exports.getAccountsByCustomerId = async (req, res, next) => {
  try {
    const { customerId } = req.params;
    const accounts = await Account.findAll({
      where: {
        customerId,
      },
      attributes: ['id', 'openDate', 'balance'],
      include: [
        {
          model: Customer,
          exclude: ['createdAt', 'updatedAt'],
        },
        {
          model: Branch,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ accounts });
  } catch (error) {
    next(error);
  }
};
