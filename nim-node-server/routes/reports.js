const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const { addUserData, isAdmin } = require("../middleware/permissionMiddleware");

router.get("/", [addUserData, isAdmin], reportController.getDailyReport);

module.exports = router;
