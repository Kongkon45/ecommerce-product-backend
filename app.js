const express = require("express");
const cors = require("cors");

const productRoute = require("./routes/product.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoute);

module.exports = app;