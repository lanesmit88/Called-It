const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {
  Post,
  Follow,
  PostInteraction,
  User,
  Comment,
} = require("../../db/models");

router.get(
  "/:id/:post",
  asyncHandler(async (req, res, next) => {
    post = req.params.post;
    userId = req.params.id;
    const followed = await Follow.findAll({ where: { followerId: userId } });
    stuff = [];
    followed.forEach((follow) => {
      temp = follow.dataValues.followedId;

      stuff.push(temp);
    });

    let tempFeed = [];

    await Promise.all(
      stuff.map(async (id) => {
        const temp = await Post.findAll({
          where: { userId: id },
          include: [PostInteraction, User, Comment],
        });
        tempFeed.push(...temp);
      })
    );
    let feedArr = tempFeed.sort((a, b) => b.id - a.id);
    let feed;
    if (post * 6 > feedArr.length) {
      feed = feedArr.slice(0);
    } else {
      feed = feedArr.slice(0, 6 * post);
    }
    res.json([...feed]);
    
  })
);


module.exports = router;
