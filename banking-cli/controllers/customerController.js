const { Customer } = require('../models');

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: ['firstName', 'lastName'],
    });
    res.status(200).json({ customers: customers });
  } catch (error) {
    next(error);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({ customer: customer });
  } catch (error) {
    next(error);
  }
};

exports.createCustomer = async (req, res, next) => {
  try {
    const { firstName, lastName, birthDate, gender, address } = req.body;
    const customer = await Customer.create({
      firstName,
      lastName,
      gender,
      birthDate,
      address,
    });
    res.status(201).json({ customer: customer });
  } catch (error) {
    next(error);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, gender, birthDate, address } = req.body;
    const rows = await Customer.update(
      {
        firstName,
        lastName,
        gender,
        birthDate,
        address,
      },
      {
        where: { id },
      }
    );
    if (rows[0] === 0) {
      return res.status(400).json({ message: 'Update failed' });
    }
    res.json({ message: 'Update successful' });
  } catch (error) {
    next(error);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({
      where: {
        id: id,
      },
    });
    await customer.destroy();
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    next(error);
  }
};

//Account CRUD
//Get Account by Customer
exports.getAccountByCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const accounts = await Customer.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Account,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });
    res.status(200).json({ accounts: accounts });
  } catch (error) {
    next(error);
  }
};
