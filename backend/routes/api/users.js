const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Post, PostInteraction, Comment } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const users = await User.findAll();
    res.json(users);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const user = await User.findOne({ where: { id: userId } });
    res.json({ user });
  })
);

router.post(
  "/:id/post",
  asyncHandler(async (req, res, next) => {
    const { userId, text, dueDate, active } = req.body;
    const newPost = await Post.create({
      userId,
      text,
      dueDate,
      active,
    });
    const createPost = await Post.findByPk(newPost.id, {
      include: [PostInteraction, User, Comment],
    });

    res.json({ createPost });
  })
);

router.get(
  "/:id/posts",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const posts = await Post.findAll({
      where: { userId: userId },
      include: [PostInteraction, User, Comment],
    });
    res.json({ posts });
  })
);

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.delete(
  "/:userId/:postId/delete",
  asyncHandler(async (req, res, next) => {
    const { id, userId } = req.body;

    const removePost = await Post.findOne({ where: { id: id } });

    await removePost.destroy();
    deletePost = { id, userId };
    res.json({ deletePost });
  })
);

router.post(
  "/:userId/:postId/complete",
  asyncHandler(async (req, res, next) => {
    const { id, userId, rightWrong } = req.body;

    const completedPost = await Post.findOne({ where: { id: id } });
    const user = await User.findOne({ where: { id: userId } });
    let userRights = user.rights;
    let userWrongs = user.wrongs;
    if (rightWrong) {
      await completedPost.update({ complete: true, correct: true });
    } else {
      await completedPost.update({ complete: true, correct: false });
    }

    if (rightWrong) {
      await user.update({ rights: userRights + 1 });
    } else {
      await user.update({ wrongs: userWrongs + 1 });
    }
    completePost = { id, userId, rightWrong };
    res.json({ completePost });
  })
);

router.put(
  "/:id/bio",
  asyncHandler(async (req, res, next) => {
    userId = req.params.id;
    const { text } = req.body;
    const user = await User.findOne({
      where: { id: userId },
      include: [PostInteraction, Comment, Post],
    });

    await user.update({ bio: text });

    const posts = await Post.findAll({
      where: { userId: userId },
      include: [PostInteraction, User, Comment],
    });

    res.json({ posts });
  })
);

router.put(
  "/:id/profPhoto",
  singleMulterUpload("profPhoto"),
  asyncHandler(async (req, res) => {
    let userId = req.params.id;
    const { data } = req.body;
    await singlePublicFileUpload(data);

    const user = await User.findOne({
      where: { id: userId },
      include: [PostInteraction, Comment, Post],
    });

    await user.update({ profilePhotoUrl: data });

    res.json({ user });
  })
);

module.exports = router;
