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
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      workshop_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "workshops",
          key: "id",
        },
      },
      response: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
