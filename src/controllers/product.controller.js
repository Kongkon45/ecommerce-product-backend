
// create product controller 

const Product = require("../models/product.model");

const createProduct = async (req, res) => {

    const product = await Product.create(req.body);

    res.status(201).json({

        success: true,

        data: product

    });

};

// get product controller 

const getProducts = async (req, res) => {

    const products = await Product.find();

    res.json({

        success: true,

        data: products

    });

};

// get single product controller 

const getProduct = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.json({

        success: true,

        data: product

    });

};


// update product controller 

const updateProduct = async (req, res) => {

    const product = await Product.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }

    );

    res.json({

        success: true,

        data: product

    });

};


// delete product controller 

const deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.json({

        success: true,

        message: "Deleted Successfully"

    });

};





module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};


