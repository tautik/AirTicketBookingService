"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //added first column -> .addColumn("Table Name", "columnName",attributes
    await queryInterface.addColumn("Bookings", "noOfSeats", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    });
    //added second column
    await queryInterface.addColumn("Bookings", "totalCost", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //if we undo this then we remove the below 2 columns
    await queryInterface.removeColumn("Bookings", "noOfSeats");
    await queryInterface.removeColumn("Bookings", "totalCost");
  },
};
