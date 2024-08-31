const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      dateOfBirth: {
        type:DataTypes.STRING,
        allowNull: true
      },
      address: {
        type:DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type:DataTypes.STRING,
        allowNull: true
      }
    },
    { timestamps: false }
  );
};
