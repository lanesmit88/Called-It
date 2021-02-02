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
      "Comments",
      [
        {
          text: "Bron=goat",
          userId: 2,
          postId: 1
        },{
          text: "haha ok then",
          userId: 4,
          postId: 1
        },{
          text: "just not a chance",
          userId: 7,
          postId: 1
        },{
          text: "%100",
          userId: 9,
          postId: 1
        },{
          text: "Only care about Marvel movies haha",
          userId: 4,
          postId: 2
        },{
          text: "so random",
          userId: 13,
          postId: 2
        },{
          text: "haha sure thing! trench2.0?",
          userId: 15,
          postId: 3
        },{
          text: "I hope so ;(",
          userId: 5,
          postId: 5
        },{
          text: "fact: they will not",
          userId: 17,
          postId: 7
        },{
          text: "For sure!",
          userId: 12,
          postId: 10
        },{
          text: "Do you remember me?",
          userId: 1,
          postId: 12
        },{
          text: ":P",
          userId: 1,
          postId: 14
        },{
          text: "Should have posted this twice haha",
          userId: 18,
          postId: 14
        },{
          text: "Def",
          userId: 19,
          postId: 15
        },{
          text: "what?",
          userId: 19,
          postId: 16
        },{
          text: "yes! I miss him..",
          userId: 1,
          postId: 21
        },{
          text: "You watch that show??",
          userId: 5,
          postId: 28
        },{
          text: "Floor gang 4ever",
          userId: 9,
          postId: 30
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
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
