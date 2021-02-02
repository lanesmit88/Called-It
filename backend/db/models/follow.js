"use strict";
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      followedId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Follow.associate = function (models) {
    // associations can be defined here
    Follow.belongsTo(models.User, { foreignKey: "followedId"})
    Follow.belongsTo(models.User, { foreignKey: "followerId"})
  };
  return Follow;
};
