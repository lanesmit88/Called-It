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
  "/:post",
  asyncHandler(async (req, res, next) => {
    post = req.params.post;
    const posts = await Post.findAll({
      include: [PostInteraction, User, Comment],
    });
    tempPosts = posts.sort(
      (a, b) => b.PostInteractions.length - a.PostInteractions.length
    );
    let allPosts = tempPosts.sort((a, b) => b.id - a.id);
    if (post * 6 > allPosts.length) {
      newPosts = allPosts.slice(0);
    } else {
      newPosts = allPosts.slice(0, 6 * post);
    }
    res.json([...newPosts]);
  })
);

module.exports = router;
