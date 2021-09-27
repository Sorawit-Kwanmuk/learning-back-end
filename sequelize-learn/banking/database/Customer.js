module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM('MALE', 'FEMALE'),
      },
      birth_date: {
        type: DataTypes.DATEONLY,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );

  Customer.associate = models => {
    Customer.hasMany(models.Account, {
      foreignKey: {
        name: 'customerId',
        allowNull: false,
      },

      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT',
    });
    Customer.belongsToMany(models.Branch, {
      through: 'Account',
      foreignKey: 'customerId',
      otherKey: 'branchId',
    });
  };
  return Customer;
};
