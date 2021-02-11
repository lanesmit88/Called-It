const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, Follow, PostInteraction, User, Comment } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const followed = await Follow.findAll({ where: { followerId: userId } });
    stuff = [];
    followed.forEach((follow) => {
      
      temp = follow.dataValues.followedId;
      
      stuff.push(temp);
    });

    let feed = [];
    
    await Promise.all(stuff.map(async (id) => {

      const temp = await Post.findAll({ where: { userId: id }, include:  [PostInteraction, User, Comment ]});
      feed.push(...temp);
    }));
   
    res.json([...feed]);
  })
);

module.exports = router;
