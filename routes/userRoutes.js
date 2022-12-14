const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");

router.get("/", userController.getU);
router.put("/:id", userController.update);

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);


module.exports = router;
