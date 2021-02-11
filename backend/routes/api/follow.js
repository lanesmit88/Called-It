const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Follow, User } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const follow = await Follow.findAll({ where: { followerId: userId } });
    res.json(follow);
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { followerId, followedId } = req.body;
    const newFollow = await Follow.create({
      followerId,
      followedId,
    });
    const createFollow = await Follow.findByPk(newFollow.id);

    res.json({ createFollow });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { followerId, followedId } = req.body;

    const unfollow = await Follow.FindOne({
      where: { followedId: followedId, followerId: followerId },
    });

    await unfollow.destroy();
    res.json({ message: "deleted" });
  })
);

module.exports = router;
