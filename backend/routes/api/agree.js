const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, PostInteraction, User } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const agrees = await PostInteraction.findAll();
    res.json(agrees);
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { userId, agree, postId } = req.body;
    const newPost = await PostInteraction.create({
      userId,
      postId,
      agree,
    });
    const createAgree = await PostInteraction.findByPk(newPost.id, {
      include: [Post, User],
    });

    res.json({ createAgree });
  })
);
module.exports = router;
