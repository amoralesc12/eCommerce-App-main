const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

//enlace router

router.get("/", productControllers.getP);
router.get("/getS", productControllers.getSearch);
//get product/search

module.exports = router;
