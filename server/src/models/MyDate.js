const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "myDate",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      professional: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
       userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
      
     }, { timestamps: false });
};
