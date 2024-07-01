const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "response",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      response: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      
    },
    { timestamps: false }
  );
};
