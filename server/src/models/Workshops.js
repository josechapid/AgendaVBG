const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "workshops",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titleOne: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      descriptionOne: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      titleTwo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imageTwo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      descriptionTwo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
