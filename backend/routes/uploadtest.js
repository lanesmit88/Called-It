const router = require('express').Router();
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3")

router.post("/", singleMulterUpload("image"), async (req, res) => {
    console.log(req.url)
    res.json({message: "nice"});
})






module.exports = router