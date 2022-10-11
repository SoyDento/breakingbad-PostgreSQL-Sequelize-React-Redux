const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.TEXT,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_DB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }

  },{
    timestamps: false
  });
};
