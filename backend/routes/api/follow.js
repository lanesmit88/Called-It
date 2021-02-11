const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Follow, User } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const follow = await Follow.findAll({ where: { followerId: userId } });
    res.json( follow );
  })
);


// router.post(
//   "/:id",
//   asyncHandler(async (req, res, next) => {
//     const { userId, agree, postId } = req.body;
//     const newPost = await Follow.create({
//       userId,
//       postId,
//       agree,
//     });
//     const createFollow = await Follow.findByPk(newPost.id, {
//       where: { userId: userId },
//       include: [Post, User],
//     });

//     res.json({ createFollow });
//   })
// );
module.exports = router;
