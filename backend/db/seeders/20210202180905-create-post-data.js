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
      "Posts",
      [
        {
          text: "Steph Curry will score 60 points in a game",
          dueDate: new Date(2021, 9, 1),
          userId: 1,
          active: new Date() < new Date(2021, 9, 1),
        },
        {
          text: "Paradise Cove will get above a 70% on rotten tomatoes",
          dueDate: new Date(2021, 1, 18),
          userId: 1,
          active: new Date() < new Date(2021, 1, 18),
        },
        {
          text: "21 Pilots will release an album this year",
          dueDate: new Date(2022, 0, 1),
          userId: 1,
          active: new Date() < new Date(2022, 0, 1),
        },
        {
          text: "Aaron rodgers will be on a new team to start next season",
          dueDate: new Date(2021, 8, 10),
          userId: 1,
          active: new Date() < new Date(2021, 8, 10),
        },
        {
          text: "There will still be COVID restrictions next year",
          dueDate: new Date(2022, 0, 1),
          userId: 1,
          active: new Date() < new Date(2022, 0, 1),
        },
        {
          text: "I will be able to dunk in 6 months",
          dueDate: new Date(2021, 1, 3),
          userId: 1,
          active: new Date() < new Date(2021, 1, 3),
        },
        {
          text: "Netflix will put The Office back on its program",
          dueDate: new Date(2021, 8, 1),
          userId: 2,
          active: new Date() < new Date(2021, 8, 1),
        },
        {
          text: "Aliens will be discovered in the next two years",
          dueDate: new Date(2023, 0, 1),
          userId: 2,
          active: new Date() < new Date(2023, 0, 1),
        },
        {
          text:
            "Lana Del Ray will have two songs hit top 2 on the billboard this year",
          dueDate: new Date(2022, 0, 1),
          userId: 2,
          active: new Date() < new Date(2022, 0, 1),
        },
        {
          text: "Disney will make a Hannah Montanna reboot",
          dueDate: new Date(2023, 0, 2),
          userId: 3,
          active: new Date() < new Date(2023, 0, 2),
        },
        {
          text: "Disney will make a Wizards of Waverly Place reboot",
          dueDate: new Date(2023, 0, 2),
          userId: 3,
          active: new Date() < new Date(2023, 0, 2),
        },
        {
          text: "Nickelodean will make a Drake & Josh reboot",
          dueDate: new Date(2023, 0, 2),
          userId: 3,
          active: new Date() < new Date(2023, 0, 2),
        },
        {
          text: "Bill Engvall will release a new comedy album",
          dueDate: new Date(2022, 5, 1),
          userId: 5,
          active: new Date() < new Date(2022, 5, 1),
        },
        {
          text: "Jimmy Fallon will host the Oscars this year",
          dueDate: new Date(2021, 4, 1),
          userId: 5,
          active: new Date() < new Date(2021, 4, 1),
        },
        {
          text: "We will decide Pluto is a planet again",
          dueDate: new Date(2023, 0, 1),
          userId: 6,
          active: new Date() < new Date(2023, 0, 1),
        },
        {
          text: "Scientists will say the moon is really made of cheese",
          dueDate: new Date(2021, 7, 1),
          userId: 6,
          active: new Date() < new Date(2021, 7, 1),
        },
        {
          text: "I will find a job",
          dueDate: new Date(2021, 3, 1),
          userId: 7,
          active: new Date() < new Date(2021, 3, 1),
        },
        {
          text: "We will get another stimulus check",
          dueDate: new Date(2021, 5, 1),
          userId: 8,
          active: new Date() < new Date(2021, 5, 1),
        },
        {
          text: "I will be a millionaire",
          dueDate: new Date(2022, 5, 1),
          userId: 8,
          active: new Date() < new Date(2022, 5, 1),
        },
        {
          text: "Betty White will still be around!",
          dueDate: new Date(2023, 0, 1),
          userId: 10,
          active: new Date() < new Date(2023, 0, 1),
        },
        {
          text: "Bo Burnham will release a new project",
          dueDate: new Date(2021, 11, 1),
          userId: 10,
          active: new Date() < new Date(2021, 11, 1),
        },
        {
          text: "Marshmello will reveal his face",
          dueDate: new Date(2021, 9, 16),
          userId: 11,
          active: new Date() < new Date(2021, 9, 16),
        },
        {
          text: "Anthony Davis will shave his unibrow",
          dueDate: new Date(2022, 1, 30),
          userId: 11,
          active: new Date() < new Date(2022, 1, 30),
        },
        {
          text: "I will hit level 2000 on chess.com",
          dueDate: new Date(2021, 7, 10),
          userId: 12,
          active: new Date() < new Date(2021, 7, 10),
        },
        {
          text: "Among us will release the new map",
          dueDate: new Date(2021, 2, 1),
          userId: 13,
          active: new Date() < new Date(2021, 2, 1),
        },
        {
          text: "DC will collab with Warzone",
          dueDate: new Date(2021, 8, 10),
          userId: 15,
          active: new Date() < new Date(2021, 8, 10),
        },
        {
          text: "Buccaneers will win the Super Bowl",
          dueDate: new Date(2021, 1, 8),
          userId: 17,
          active: new Date() < new Date(2021, 1, 8),
        },
        {
          text: "Abigail Heringer will be the next bachelorette",
          dueDate: new Date(2021, 7, 10),
          userId: 18,
          active: new Date() < new Date(2021, 7, 10),
        },
        {
          text: "Kanye West will drop an album this year",
          dueDate: new Date(2022, 0, 1),
          userId: 20,
          active: new Date() < new Date(2022, 0, 1),
        },
        {
          text: "Markiplier will quit youtube",
          dueDate: new Date(2022, 5, 15),
          userId: 20,
          active: new Date() < new Date(2022, 5, 15),
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
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
