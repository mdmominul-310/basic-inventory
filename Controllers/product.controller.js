const Product = require("../Models/Product")
const { getProductService, createProductService, updateProductService, bulkUpdateProductService, productDeleteService, bulkDeleteProductService } = require("../Services/product.services")

exports.getProduct = async (req, res, next) => {
    try {
        const products = await getProductService()
        res.status(200).json({
            status: "success",
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get data",
            error: error.message
        })
    }
}


exports.createProduct = async (req, res, next) => {
    try {
        // const product = new Product(req.body)

        // const result = await product.save();
        const result = await createProductService(req.body);

        res.status(200).json({
            status: "sucess",
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'data is not inserted',
            error: error.message
        })
    }

}

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);
        res.status(200).json({
            status: "sucess",
            message: 'Data update successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't update the product",
            error: error.message
        })
    }
}

exports.bulkProductUpdate = async (req, res, next) => {
    try {
        const result = await bulkUpdateProductService(req.body);

        res.status(200).json({
            status: "sucess",
            message: 'Data update successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't update the product",
            error: error.message
        })
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await productDeleteService(id);
        res.status(200).json({
            status: 'success',
            message: 'Succesfully delete the product',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't delete the product",
            error: error.message
        })
    }
}

exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const result = await bulkDeleteProductService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Succesfully delete selected product',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't delete selected product",
            error: error.message
        })
    }
}