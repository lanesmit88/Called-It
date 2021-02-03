'use strict';

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
     "Follows",
     [
       {
         followedId: 2,
         followerId: 1,
       },
       {
         followedId: 3,
         followerId: 1,
       },
       {
         followedId: 4,
         followerId: 1,
       },
       {
         followedId: 8,
         followerId: 5,
       },
       {
         followedId: 6,
         followerId: 1,
       },
       {
         followedId: 8,
         followerId: 1,
       },
       {
         followedId: 10,
         followerId: 1,
       },
       {
         followedId: 11,
         followerId: 1,
       },
       {
         followedId: 14,
         followerId: 1,
       },
       {
         followedId: 15,
         followerId: 1,
       },
       {
         followedId: 17,
         followerId: 1,
       },
       {
         followedId: 18,
         followerId: 1,
       },
       {
         followedId: 20,
         followerId: 1,
       },
       {
         followedId: 1,
         followerId: 2,
       },
       {
         followedId: 4,
         followerId: 2,
       },
       {
         followedId: 5,
         followerId: 2,
       },
       {
         followedId: 7,
         followerId: 2,
       },
       {
         followedId: 11,
         followerId: 2,
       },
       {
         followedId: 1,
         followerId: 3,
       },
       {
         followedId: 2,
         followerId: 3,
       },
       {
         followedId: 4,
         followerId: 3,
       },
       {
         followedId: 14,
         followerId: 3,
       },
       {
         followedId: 14,
         followerId: 3,
       },
       {
         followedId: 1,
         followerId: 4,
       },
       {
         followedId: 6,
         followerId: 4,
       },
       {
         followedId: 16,
         followerId: 4,
       },
       {
         followedId: 2,
         followerId: 5,
       },
       {
         followedId: 17,
         followerId: 5,
       },
       {
         followedId: 3,
         followerId: 6,
       },
       {
         followedId: 5,
         followerId: 6,
       },
       {
         followedId: 8,
         followerId: 6,
       },
       {
         followedId: 12,
         followerId: 6,
       },
       {
         followedId: 13,
         followerId: 6,
       },
       {
         followedId: 1,
         followerId: 7,
       },
       {
         followedId: 4,
         followerId: 7,
       },
       {
         followedId: 6,
         followerId: 7,
       },
       {
         followedId: 13,
         followerId: 7,
       },
       {
         followedId: 20,
         followerId: 7,
       },
       {
         followedId: 1,
         followerId: 8,
       },
       {
         followedId: 3,
         followerId: 8,
       },
       {
         followedId: 14,
         followerId: 8,
       },
       {
         followedId: 2,
         followerId: 9,
       },
       {
         followedId: 12,
         followerId: 9,
       },
       {
         followedId: 16,
         followerId: 9,
       },
       {
         followedId: 3,
         followerId: 10,
       },
       {
         followedId: 5,
         followerId: 10,
       },
       {
         followedId: 7,
         followerId: 10,
       },
       {
         followedId: 19,
         followerId: 10,
       },
       {
         followedId: 1,
         followerId: 11,
       },
       {
         followedId: 4,
         followerId: 11,
       },
       {
         followedId: 7,
         followerId: 11,
       },
       {
         followedId: 9,
         followerId: 11,
       },
       {
         followedId: 14,
         followerId: 11,
       },
       {
         followedId: 18,
         followerId: 11,
       },
       {
         followedId: 1,
         followerId: 12,
       },
       {
         followedId: 3,
         followerId: 12,
       },
       {
         followedId: 8,
         followerId: 12,
       },
       {
         followedId: 10,
         followerId: 12,
       },
       {
         followedId: 16,
         followerId: 12,
       },
       {
         followedId: 6,
         followerId: 13,
       },
       {
         followedId: 1,
         followerId: 15,
       },
       {
         followedId: 2,
         followerId: 15,
       },
       {
         followedId: 9,
         followerId: 15,
       },
       {
         followedId: 16,
         followerId: 15,
       },
       {
         followedId: 20,
         followerId: 15,
       },
       {
         followedId: 1,
         followerId: 17,
       },
       {
         followedId: 4,
         followerId: 17,
       },
       {
         followedId: 15,
         followerId: 17,
       },
       {
         followedId: 5,
         followerId: 18,
       },
       {
         followedId: 12,
         followerId: 18,
       },
       {
         followedId: 1,
         followerId: 19,
       },
       {
         followedId: 5,
         followerId: 19,
       },
       {
         followedId: 18,
         followerId: 19,
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
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Follows", null, {});
  }
};
