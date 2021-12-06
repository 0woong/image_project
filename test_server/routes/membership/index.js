var express = require("express");
const membershipController = require("../../controllers/membership/membershipController");
var router = express.Router();
const upload = require("../../modules/awsUpload");

// 이미지 업로드

router.post("/images", upload.single("img"), membershipController);

// membership 업로드
router.post("/", membershipController.uploadMembership);

router.get("/", membershipController.readAllMembership);

router.get("/:gender", membershipController.detailMembership);

module.exports = router;
