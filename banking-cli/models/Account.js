module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    'Account',
    {
      openDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CloseDate: DataTypes.DATEONLY,
      balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          inNumeric: true,
          greZero(value) {
            if (value < 0) {
              throw new Error('Balance cannot be negative');
            }
          },
        },
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
    Account.belongsTo(
      models.Customer,
      {
        foreignKey: 'customerId',
        allowNull: false,
      },
      {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      }
    );
    Account.belongsTo(
      models.Branch,
      {
        foreignKey: 'branchId',
        allowNull: false,
      },
      {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      }
    );
  };
  return Account;
};
