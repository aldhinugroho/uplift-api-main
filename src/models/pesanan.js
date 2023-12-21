'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pesanan.init({
    penggunaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    status: {
      type: DataTypes.ENUM('pending', 'proses', 'selesai'),
      allowNull: false,
      defaultValue: 'pending',
    },
    totalHarga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Pesanan',
    tableName: 'Pesanans',
    underscored: true,
    paranoid: true,
  });
  return Pesanan;
};