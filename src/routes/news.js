const express = require("express");
const router = express.Router();

// Import the NewsController using the correct relative path
const newsController = require("../resources/app/controllers/NewsController");

router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
