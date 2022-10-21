const Product = require('../Models/Product')


exports.getProductService = async () => {
    const product = await Product.find({});
    return product;
}

exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product
}

exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $set: data }, {
        runValidators: true
    });
    return result
}

exports.bulkUpdateProductService = async (data) => {
    const result = await Product.updateMany({ _id: data.ids }, { $set: data.data }, {
        runValidators: true
    })
}

exports.productDeleteService = async (id) => {
    const result = await Product.deleteOne({ _id: id })
    return result;
}

exports.bulkDeleteProductService = async (ids) => {
    const result = await Product.deleteMany({ _id: ids });
    return result;
}