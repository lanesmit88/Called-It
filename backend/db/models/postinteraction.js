"use strict";
module.exports = (sequelize, DataTypes) => {
  const PostInteraction = sequelize.define(
    "PostInteraction",
    {
      agree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  PostInteraction.associate = function (models) {
    // associations can be defined here
    PostInteraction.belongsTo(models.User, { foreignKey: "userId"});
    PostInteraction.belongsTo(models.Post, { foreignKey: "postId"});
  };
  return PostInteraction;
};
