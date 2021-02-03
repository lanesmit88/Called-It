const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Post, PostInteraction } = require("../../db/models");

router.get(
  "/:postId",
  asyncHandler(async (req, res, next) => {
    postId = req.params.postId;
    const agrees = await PostInteraction.findAll({ where: { postId: postId }})

    res.json( agrees );
  })
);

module.exports = router;
