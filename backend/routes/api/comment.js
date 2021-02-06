const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, PostInteraction, User, Comment } = require("../../db/models");

router.get(
  "/:postId",
  asyncHandler(async (req, res, next) => {
    const comments = await Comment.findAll({ where: { postId: postId } });
    res.json(comments);
  })
);

module.exports = router;
