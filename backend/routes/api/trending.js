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
  "/",
  asyncHandler(async (req, res, next) => {
    const posts = await Post.findAll({
      include: [PostInteraction, User, Comment],
    });
    newPosts = posts.sort((a,b) =>
    ( b.PostInteractions.length - a.PostInteractions.length ))
    res.json([...newPosts])
  })
);

module.exports = router;
