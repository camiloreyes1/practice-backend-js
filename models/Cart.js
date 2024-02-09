const { Schema, model} = require('mongoose')

const cartSchema = new Schema ({

    items: [{type: Schema.Types.ObjectId, ref: "Item"}],

    subtotal:{
        type: Number,
        default: 0
    },

    tax: {
        type: Number,
        default: 1.08
    },

    total: {
        type: Number,
        default: 0
    },

    owner: {type: Schema.Types.ObjectId, ref:"User"},

    timeleft:Date,

    expireAt: {type: Date, expires: '2m', default: Date.now },

},

    {
        timestamps: true
    }
    
)

module.exports = model('Cart', cartSchema)