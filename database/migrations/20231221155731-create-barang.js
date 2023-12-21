'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_barang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      stok: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tokoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tokos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Barangs');
  }
};