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
    */ return queryInterface.bulkInsert(
      "Messages",
      [
        {
          text: "Hey cool page!",
          senderId: 1,
          recipientId: 2,
        },
        {
          text: "We should hang sometime!",
          senderId: 1,
          recipientId: 5,
        },
        {
          text: "You are soo smart:0",
          senderId: 2,
          recipientId: 1,
        },
        {
          text: "You remind me of my uncle Jim",
          senderId: 3,
          recipientId: 1,
        },
        {
          text: "How long have you been on this app?",
          senderId: 3,
          recipientId: 1,
        },
        {
          text: "Heya",
          senderId: 6,
          recipientId: 7,
        },
        {
          text: "How tall are you?",
          senderId: 9,
          recipientId: 16,
        },
        {
          text: "Google me. Im rich ok",
          senderId: 17,
          recipientId: 9,
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
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
