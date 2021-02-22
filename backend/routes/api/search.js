const express = require("express");
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

router.get(
  "/:query",
  asyncHandler(async (req, res) => {
    const query = req.params.query;
    const users = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${query}%`,
        },
      },
    });
    res.json({ users });
  })
);

module.exports = router;
