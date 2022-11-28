const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");

router.get("/", userController.getU);
router.put("/:id", userController.update);

module.exports = router;
