const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    discountPrice: {
        type: Number,
        default: 0,
        min: 0
    },

    stock: {
        type: Number,
        default: 0,
        min: 0
    },

    brand: String,

    category: String,

    thumbnail: String,

    images: [String],

    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },

    isFeatured: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);