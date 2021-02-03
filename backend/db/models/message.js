"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      recipientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Message.associate = function (models) {
    // associations can be defined here
    Message.belongsTo(models.User, { foreignKey: "senderId" });
    Message.belongsTo(models.User, { foreignKey: "recipientId" });
  };
  return Message;
};
