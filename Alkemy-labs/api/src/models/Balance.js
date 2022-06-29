const { DataTypes, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('balance', {
    money: {
      type: DataTypes.FLOAT,
      allowNull: false,   
    },
    concept: {
        type: DataTypes.TEXT
    },
    get_into: {
        type: BOOLEAN,
        defaultValue: false
    }
  });
};
