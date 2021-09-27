module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'account',
    {
      openDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      closeDate: {
        type: DataTypes.DATEONLY,
      },
      balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      underscored: true,
    }
  );
  Account.associate = models => {
    Account.belongsTo(models.Customer, {
      foreignKey: {
        name: 'customerId',
        allowNull: false,
      },

      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    });
    Account.belongsTo(models.Branch, {
      foreignKey: {
        name: 'branchId',
        allowNull: false,
      },

      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    });
    Account.hasMany(models.Transfer, {
      as: 'transferTos',
      foreignKey: { name: 'toAccountId' },
      allowNull: false,
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    });
    Account.hasMany(models.Transfer, {
      as: 'transferFroms',
      foreignKey: { name: 'fromAccountId' },
      allowNull: false,
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    });
  };
  return Account;
};
