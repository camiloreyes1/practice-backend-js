const { Schema, model, Types } = require('mongoose')

const itemSchema = new Schema(
    {
        
        owner: {type: Schema.Types.ObjectId, ref: 'User'},

        name: String,

        desc: String,

        price: { type: Number,
                default: 0
                },

        image: String,
        size: String,
    },

    {
        timeseries: true
    }

)

module.exports = model('Item', itemSchema)

