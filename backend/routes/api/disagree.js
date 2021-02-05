const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, PostInteraction, User } = require("../../db/models");

router.post(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { userId, agree, postId } = req.body;
    const newPost = await PostInteraction.create({
      userId,
      postId,
      agree,
    });
    const createDisagree = await PostInteraction.findByPk(newPost.id, {
      where: { userId: userId },
      include: [Post, User],
    });

    res.json({ createDisagree });
  })
);
module.exports = router;
