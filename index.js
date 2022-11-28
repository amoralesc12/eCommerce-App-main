const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

//instancias de routes
const productsRouter = require("./routes/productRoutes");
const usersRouter = require("./routes/userRoutes");

//Definicion de routes
app.use("/product", productsRouter);
app.use("/user", usersRouter);
app.listen(3000);
