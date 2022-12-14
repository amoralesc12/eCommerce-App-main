const OrdersModel = require("../db-models/orders.model")

module.exports = async function getOrders(_, res) {
  res.send(await OrdersModel.find())
}