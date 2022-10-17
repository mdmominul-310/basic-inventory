const { getProductService, createProductService } = require("../Services/product.services")

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