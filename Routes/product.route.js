const express = require("express");
const router = express.Router();
const productController = require('../Controllers/product.controller')


router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)

module.exports = router;