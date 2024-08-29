const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "howDoIFeel",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      response: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },     
    },
    { timestamps: false }
  );
};
