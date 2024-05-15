const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define(
     "careroutes",
    {
        id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:  true,
            },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    { timestamps: false },
   );
};