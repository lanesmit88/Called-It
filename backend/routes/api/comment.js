const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, PostInteraction, User, Comment } = require("../../db/models");

router.get(
  "/:postId",
  asyncHandler(async (req, res, next) => { 
    postId = req.params.postId;
    const comments = await Comment.findAll({
      where: { postId: postId },
      include: [User],
    });
    res.json(comments);
  })
);

router.post(
  "/post",
  asyncHandler(async (req, res, next) => {
    const { userId, text, postId } = req.body;
    const newComment = await Comment.create({
      userId,
      postId,
      text,
    });
    const createComment = await Comment.findByPk(newComment.id, {
      include: [Post, User],
    });

    res.json({ createComment });
  })
);

module.exports = router;
