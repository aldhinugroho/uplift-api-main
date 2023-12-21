'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init({
    nama_barang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tokoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tokos',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Barang',
    tableName: 'Barangs',
    underscored: true,
    paranoid: true,
  });
  return Barang;
};