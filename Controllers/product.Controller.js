const Product = require('../models/products');
const Category = require('../models/category')

exports.add_products = async (req, res) => {
    const products = await Product.create({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        images: req.body.images,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
    })

    products.save().then(() => {
        res.status(200).json({
            status: 'success!',
            message: 'Product created successfuly!'
        })
    }).catch ((err) => {
        res.status(500).json({
        status: 'fail!',
        error: err
    })
})
}

exports.get_products = async (req, res) => {
    try {
        const products = await Product.find().populate('Category')

        if(!products) {
            return res.status(404).json({
                status: 'fail!',
                message: 'Product cannt be found!'
            })
        }

        res.status(200).json({
            status: 'success!',
            data: {
                products
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail!',
            error: err
        })
    }
}