const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "banners",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey:  true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        { timestamps: false }
    );
};