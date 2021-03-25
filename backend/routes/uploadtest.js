const router = require("express").Router();
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3");

router.post("/", singleMulterUpload("bubblebop"), async (req, res) => {
  const urlOnS3 = await singlePublicFileUpload(req.file);
  console.log(urlOnS3);
  res.json({ message: "nice" });
});

module.exports = router;
