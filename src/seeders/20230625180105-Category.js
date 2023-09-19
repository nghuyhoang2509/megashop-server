"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Laptop",
          imageId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tablet",
          imageId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phone",
          imageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accessory",
          imageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
