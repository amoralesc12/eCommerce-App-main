const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

require("dotenv").config();
const db = require('./db/memory-database')
const app = express();
app.use(bodyParser.json());
app.use(cors());

db({ test: false });
//instancias de routes
const productsRouter = require("./routes/productRoutes");
const usersRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/ordersRoutes");

//Definicion de routes
app.use("/product", productsRouter);
app.use("/user", usersRouter);
app.use('/order', orderRouter);


app.listen(3001);
