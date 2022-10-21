const express = require("express");
const router = express.Router();
const productController = require('../Controllers/product.controller')


router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)


router.route('/bulk-update')
    .patch(productController.bulkProductUpdate)
router.route('/:id')
    .patch(productController.updateProduct)

router.route('/bulk-delete')
    .delete(productController.bulkDeleteProduct)
router.route('/:id')
    .delete(productController.deleteProduct)

module.exports = router;