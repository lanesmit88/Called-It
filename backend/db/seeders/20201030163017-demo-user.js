"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
          bio:
            "Hi! I am the demo user. I have good information and stuff so I hope you check my profile out! :D",
        },
        {
          email: faker.internet.email(),
          username: "Billyards",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
          bio: "The name is Billy. Proffesional pool player. Get wrecked",
        },
        {
          email: faker.internet.email(),
          username: "CreamedCorn",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          bio: "My mom says my jokes aren't corny.. I beg to differ heehee",
        },
        {
          email: faker.internet.email(),
          username: "Hanky",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1520974735194-9e0ce82759fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          bio:
            " I know everything. I make all the perfect predictions. It is because I am so smart and cool. Ok you can follow now",
        },
        {
          email: faker.internet.email(),
          username: "Memer",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          bio: "Here for the lolz",
        },
        {
          email: faker.internet.email(),
          username: "BadBoi",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          bio: "I dont like you.. go away plz |:(",
        },
        {
          email: faker.internet.email(),
          username: "onionfriend",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80",
          bio:
            "Your onion friend is here to call all his shots. Don't cry when I am right",
        },
        {
          email: faker.internet.email(),
          username: "Trixie",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          bio:
            "Hi yall! I'm Trixie! A dancer from New Orleans and I follow back ;)",
        },
        {
          email: faker.internet.email(),
          username: "KrunkFlugget",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          bio: "I get krunk son",
        },
        {
          email: faker.internet.email(),
          username: "Dabking",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1182&q=80",
          bio: "I win all the predictions..... And then I dab on you",
        },
        {
          email: faker.internet.email(),
          username: "SamPhillips",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          bio:
            "I am here becuase this is a genius idea and Im hoping to buy this website for 200 million.",
        },
        {
          email: faker.internet.email(),
          username: "GreyGander",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          email: faker.internet.email(),
          username: "gertRUDE",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
          bio: "Is this facebook?",
        },
        {
          email: faker.internet.email(),
          username: "Kamper",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1522778147829-047360bdc7f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80",
          bio: "Hey erryone. Follow for some great predictions!",
        },
        {
          email: faker.internet.email(),
          username: "FleeseQueen",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl: "",
          bio: "I'll fleese you all",
        },
        {
          email: faker.internet.email(),
          username: "UncleJimbo",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
          bio: "A man with a plan",
        },
        {
          email: faker.internet.email(),
          username: "Badattitude",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1474980660552-84fda824db4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80",
          bio: "Here I am. Love me or hate me... you gotta love me!",
        },
        {
          email: faker.internet.email(),
          username: "cheeseDreamz",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1525219884637-43180fbb6455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80",
          bio: " I. Dream. Of. Cheeze!",
        },
        {
          email: faker.internet.email(),
          username: "CrampedWheasel",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          profilePhotoUrl:
            "https://images.unsplash.com/photo-1524607592630-66e87afd2571?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
          bio: "Why are you so close to me? gimme some space plz",
        },
        {
          email: faker.internet.email(),
          username: "badUser",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Demo-lition",
            "Billyards",
            "CreamedCorn",
            "Hanky",
            "Memer",
            "BadBoi",
            "onionfriend",
            "Trixie",
            "KrunkFlugget",
            "Dabking",
            "SamPhillips",
            "GreyGander",
            "gertRUDE",
            "Kamper",
            "FleeseQueen",
            "UncleJimbo",
            "Badattitude",
            "cheeseDreamz",
            "CrampedWheasel",
            "badUser",
          ],
        },
      },
      {}
    );
  },
};
