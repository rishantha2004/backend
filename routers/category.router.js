const express = require('express');
const router = express.Router();
const controller = require('../Controllers/category.Controller');

router.post('/', controller.add_category);
router.get('/', controller.get_category);

module.exports = router;