const Category = require('../models/category');

exports.add_category = async (req, res) => {
    const category = await Category.create({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    });

    category.save().then(() => {
        res.status(200).json({
            status: 'success!',
            message: 'Category created successfuly!'
        })
    }).catch ((err) => {
        res.status(500).json({
            status: 'fail!',
            error: err
        })
    })
}

exports.get_category = async (req, res) => {
    try {
        const category = await Category.find();

        if(!category) {
            return res.status(404).send('Category cannot be created!')
        }

        res.status(200).json({
            status: 'success!',
            data: {
                category
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail!',
            error: err
        })
    }
}