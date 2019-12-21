const express = require("express");
const path = require("path");
const rootDir = require("../helper/path");
const adminData = require("../routes/admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop");
});

module.exports = router;
