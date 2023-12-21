'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tokos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaToko: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING
      },
      pemilikId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nama tabel yang direferensikan
          key: 'id' // Kolom yang menjadi kunci referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Tokos');
  }
};