const express = require("express");
const router = express.Router();

const getOrders = require("../controllers/ordersControllers");

// enlace de routes
router.get('/', getOrders);

module.exports = router;