const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },

    description: {
        type: String
    },

    richDescription: {
        type: String
    },

    image: {
        type: String
    },

    images: [{
        type: String
    }],

    brand: {
        type: String
    },

    price: {
        type: Number
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },

    countInStock: {
        types: Number,
    },

    rating: {
        type: Number,
    },

    isFeatured: {
        type: Boolean,
    },

    dataCreated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Product', productSchema);