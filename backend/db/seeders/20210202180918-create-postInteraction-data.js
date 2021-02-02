"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "PostInteractions",
      [
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 7,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 10,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 15,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 18,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 20,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 25,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 28,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 29,
        },
        {
          agree: Math.random() < 0.6,
          userId: 1,
          postId: 30,
        },
        {
          agree: Math.random() < 0.6,
          userId: 2,
          postId: 1,
        },
        {
          agree: Math.random() < 0.6,
          userId: 2,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 2,
          postId: 10,
        },
        {
          agree: Math.random() < 0.6,
          userId: 2,
          postId: 18,
        },
        {
          agree: Math.random() < 0.6,
          userId: 2,
          postId: 27,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 5,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 9,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 13,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 17,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 22,
        },
        {
          agree: Math.random() < 0.6,
          userId: 3,
          postId: 27,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 8,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 17,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 20,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 23,
        },
        {
          agree: Math.random() < 0.6,
          userId: 4,
          postId: 28,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 3,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 5,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 6,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 17,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 20,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 21,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 24,
        },
        {
          agree: Math.random() < 0.6,
          userId: 5,
          postId: 26,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 10,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 12,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 23,
        },
        {
          agree: Math.random() < 0.6,
          userId: 6,
          postId: 30,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 8,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 15,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 26,
        },
        {
          agree: Math.random() < 0.6,
          userId: 7,
          postId: 29,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 1,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 6,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 13,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 16,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 21,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 24,
        },
        {
          agree: Math.random() < 0.6,
          userId: 8,
          postId: 28,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 5,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 12,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 14,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 17,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 23,
        },
        {
          agree: Math.random() < 0.6,
          userId: 9,
          postId: 30,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 1,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 7,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 10,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 13,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 15,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 18,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 24,
        },
        {
          agree: Math.random() < 0.6,
          userId: 10,
          postId: 29,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 3,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 7,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 9,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 12,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 18,
        },
        {
          agree: Math.random() < 0.6,
          userId: 11,
          postId: 27,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 1,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 2,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 8,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 13,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 16,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 19,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 22,
        },
        {
          agree: Math.random() < 0.6,
          userId: 12,
          postId: 26,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 1,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 5,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 6,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 9,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 11,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 13,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 16,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 18,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 20,
        },
        {
          agree: Math.random() < 0.6,
          userId: 13,
          postId: 27,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 5,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 8,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 10,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 14,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 24,
        },
        {
          agree: Math.random() < 0.6,
          userId: 14,
          postId: 29,
        },
        {
          agree: Math.random() < 0.6,
          userId: 15,
          postId: 3,
        },
        {
          agree: Math.random() < 0.6,
          userId: 15,
          postId: 4,
        },
        {
          agree: Math.random() < 0.6,
          userId: 15,
          postId: 6,
        },
        {
          agree: Math.random() < 0.6,
          userId: 15,
          postId: 8,
        },
        {
          agree: Math.random() < 0.6,
          userId: 15,
          postId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('PostInteractions', null, {});
    */
    return queryInterface.bulkDelete("PostInteractions", null, {});
  },
};
