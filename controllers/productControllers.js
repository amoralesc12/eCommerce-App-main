const productService = require("../services/products");

const { isDecimal } = require("../utils/validator");
const { isString } = require("../utils/validator");

async function getP(req, res) {
  try {
    const { limit, offset } = req.query;
    const errorMessages = [];
    if (!limit && !offset) {
      errorMessages.push("Parameter 'limit' and 'offset' is required");
    }
    if (isDecimal(limit)) {
      errorMessages.push("Parameter 'limit' needs to be an integer");
    }
    if (isDecimal(offset)) {
      errorMessages.push("Parameter 'offset' needs to be an integer");
    }
    if (errorMessages.length) {
      res.status(400).send(errorMessages);
    } else {
      const products = await productService.getProduct(limit, offset);
      if (products.length) res.send(products[0]);
      else {
        res.status(404).send("product does not exist");
      }
    }
  } catch (exception) {
    res.status(500).send("internal server error");
  }
}

async function getSearch(req, res) {
  try {
    const { name } = req.query.name;
    const errorMessages = [];
    if (!name) {
      errorMessages.push("Parameter 'name' is required");
    }
    if (!isString(name)) {
      errorMessages.push("Parameter 'name' needs to be a string");
    }
    if (errorMessages.length) {
      res.status(400).send(errorMessages);
    } else {
      const product_s = await productService.getPS(name);
      if (product_s.length) res.send(product_S[0]);
      else {
        res.status(404).send("name does not exist");
      }
    }
  } catch (exception) {
    res.status(500).send("internal server error");
  }
}

module.exports = {
  getP,
  getSearch,
};
