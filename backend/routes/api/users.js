const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Post, PostInteraction } = require("../../db/models");

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
    const { userId, text, dueDate } = req.body;
    const newPost = await Post.create(
      {
        userId,
        text,
        dueDate,
      }
    );
    const createPost = await Post.findByPk(newPost.id, {
      where: { userId: userId },
      include: [PostInteraction, User],
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
      include: [PostInteraction, User],
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

module.exports = router;
