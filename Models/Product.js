const mongoose = require("mongoose");

//schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name Must be unique"],
        minLength: [3, "Name must be at least 3 Characters"],
        maxLength: [100, "Name is too large"]
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs"],
            message: "unit value can't be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            },
            message: 'Quantity must be an integer'
        }
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["In-stock", "Out-of-stock", "Discontinued"],
            message: "Status can't be {VALUE}"
        }
    },
    // createAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supplier"
    // },
    // categories: [
    //     {
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         _id: mongoose.Schema.Types.ObjectId
    //     }
    // ]

}, {
    timestamps: true,
})

//mongoose middlewares for savig data
productSchema.pre('save', function (next) {
    console.log('before saving data')
    next()
});
productSchema.post('save', function (doc, next) {
    console.log("After saving data")
    next()
})

//Schema=>Model=>Query

const Product = mongoose.model('Product', productSchema);



module.exports = Product;