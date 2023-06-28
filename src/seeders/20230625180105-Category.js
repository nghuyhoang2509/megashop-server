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
      "categories",
      [
        {
          name: "Laptop",
          image:
            "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/category/laptop",
        },
        {
          name: "Tablet",
          image:
            "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/category/tablet",
        },
        {
          name: "Phone",
          image:
            "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/category/phone",
        },
        {
          name: "Accessory",
          image:
            "https://res.cloudinary.com/dbpvy9xt6/image/upload/f_auto,q_auto/v1/category/accessory",
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
