const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { User, Follow } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const followed = await Follow.findAll({ where: { followedId: userId } });
    console.log("---------------------------------------", followed)
    res.json({followed: followed})
  })
);

module.exports = router;