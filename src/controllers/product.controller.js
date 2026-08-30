
const Product = require("../models/product.model");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const createProduct = catchAsync(async (req, res) => {

    const product = await Product.create(req.body);

    res.status(201).json({

        success: true,

        data: product

    });

});

const getProducts = catchAsync(async (req, res) => {

    const products = await Product.find();

    res.json({

        success: true,

        data: products

    });

});

const getProduct = catchAsync(async (req, res) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    res.json({

        success: true,

        data: product

    });

});

const updateProduct = catchAsync(async (req, res) => {

    const product = await Product.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true, runValidators: true }

    );

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    res.json({

        success: true,

        data: product

    });

});

const deleteProduct = catchAsync(async (req, res) => {

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    res.json({

        success: true,

        message: "Deleted Successfully"

    });

});





module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};


