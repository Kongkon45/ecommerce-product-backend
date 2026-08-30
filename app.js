const express = require("express");
const cors = require("cors");

const productRoute = require("./src/routes/product.route");
const errorMiddleware = require("./src/middlewares/error.middleware");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use("/api/products", productRoute);

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found"
	});
});

app.use(errorMiddleware);

module.exports = app;