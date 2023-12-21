'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toko extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Toko.init({
    namaToko: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING
    },
    pemilikId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nama tabel yang direferensikan
        key: 'id' // Kolom yang menjadi kunci referensi
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'Toko',
    tableName: 'Tokos',
    underscored: true,
    paranoid: true,
  });
  return Toko;
};