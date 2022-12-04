const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

//enlace router

router.get("/", productControllers.getProduct);
router.get("/getsearch", productControllers.getSearch);
//get product/search

module.exports = router;
