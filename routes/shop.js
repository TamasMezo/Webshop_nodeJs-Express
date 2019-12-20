const express = require("express");
const path = require("path");
const rootDir = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
