const errorMiddleware = (error, req, res, next) => {
	const isClientError = ["ValidationError", "CastError"].includes(error.name);
	const statusCode = error.statusCode || (isClientError ? 400 : 500);
	const message = statusCode === 500 ? "Internal server error" : error.message;

	if (res.headersSent) {
		return next(error);
	}

	res.status(statusCode).json({
		success: false,
		message
	});
};

module.exports = errorMiddleware;
