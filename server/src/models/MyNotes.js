const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "myNotes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
  },
    { timestamps: false }
  );
};
