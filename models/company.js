"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER
      },
      name: DataTypes.STRING
    },
    {}
  );

  Company.associate = models => {
    Company.belongsToMany(models.User, {
      through: models.UserCompany
    });
  };

  return Company;
};