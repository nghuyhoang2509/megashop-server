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
    await queryInterface.bulkInsert("images", [
      {
        id: 1,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338501/jdvbh49nldy3qny65lbz.png",
        publicId: "jdvbh49nldy3qny65lbz",
        signature: "21f4875c9e0777f4abed550dd19bbff05f95ee2e",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338509/ehfnmhpzxxdvlmv92dze.png",
        publicId: "ehfnmhpzxxdvlmv92dze",
        signature: "57139cd8fdde7f35010164208e433698278afbf3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338516/lsobgjwemhgorpw3zyvc.png",
        publicId: "lsobgjwemhgorpw3zyvc",
        signature: "56151b9697b40861160084593fcf3312cd6f9924",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338522/mh8pjkdotydnzn1gkj2h.png",
        publicId: "mh8pjkdotydnzn1gkj2h",
        signature: "48fe709ebae8dc8040d2f9f1da3c84a3119f1794",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338529/nbtzw8q2o7yejnn7tuaw.png",
        publicId: "nbtzw8q2o7yejnn7tuaw",
        signature: "d03d36ee66b25b61038a53e401160e9439338c37",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338538/trmz89zi8rfd4v79bffa.png",
        publicId: "trmz89zi8rfd4v79bffa",
        signature: "3417a996482b491962d9595fb6f7b491abf3183a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689338544/z6fatlywuh8eei7qpvxx.png",
        publicId: "z6fatlywuh8eei7qpvxx",
        signature: "2dd19d9aca3bdaa58b962f8ea13dbd34a597aae4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689529293/pqcrmn4euz8hjwrk9m1c.jpg",
        publicId: "pqcrmn4euz8hjwrk9m1c",
        signature: "d8e6888ab1eb937e1c715c776b835fe65528d1e7",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: "2023-07-16 17:41:32",
        updatedAt: "2023-07-16 17:41:32",
      },
      {
        id: 9,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689529477/hud2rodfehv0kchhd7u5.png",
        publicId: "hud2rodfehv0kchhd7u5",
        signature: "7a223d8195d6e87117d2830f5432e253291e936e",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: "2023-07-16 17:44:36",
        updatedAt: "2023-07-16 17:44:36",
      },
      {
        id: 10,
        url: "http://res.cloudinary.com/dbpvy9xt6/image/upload/v1689529486/p9isxmyiunnbilgdandp.jpg",
        publicId: "p9isxmyiunnbilgdandp",
        signature: "09ba4653c7af17027b52f001609db5553e1c8ecf",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: "2023-07-16 17:44:45",
        updatedAt: "2023-07-16 17:44:45",
      },
    ]);
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
