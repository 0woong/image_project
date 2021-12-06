var express = require("express");
var router = express.Router();

const membershipRouter = require("./membership/index");

router.use("/membership", membershipRouter);

module.exports = router;
