//Get Account by Branch

//Get Account by Branch and Branch

//Get total balance on each branch

//Get total balance on each Branch
const { Branch } = require('../models');

exports.getAllBranches = async (req, res, next) => {
  try {
    const branches = await Branch.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      order: ['name'],
    });
    res.status(200).json({ branches: branches });
  } catch (error) {
    next(error);
  }
};

exports.getBranchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await Branch.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({ branch: branch });
  } catch (error) {
    next(error);
  }
};

exports.createBranch = async (req, res, next) => {
  try {
    const { name } = req.body;
    const branch = await Branch.create({
      name,
    });
    res.status(201).json({ branch: branch });
  } catch (error) {
    next(error);
  }
};

exports.updateBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const rows = await Branch.update(
      {
        name,
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

exports.deleteBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await Branch.destroy({
      where: { id },
    });
    if (rows === 0) {
      return res.status(400).json({ message: 'Delete failed' });
    }
    res.status(200).json({ message: 'Branch deleted' });
  } catch (error) {
    next(error);
  }
};

//Account CRUD
//Get Account by Branch
exports.getAccountByBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const accounts = await Branch.findOne({
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
