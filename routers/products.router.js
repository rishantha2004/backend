const express = require('express');
const router = express.Router();
const controller = require('../Controllers/product.Controller');

router.post('/', controller.add_products);
router.get('/', controller.get_products);

module.exports = router;