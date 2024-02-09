const { Schema, model, Types } = require('mongoose')

const itemSchema = new Schema(
    {   
        owner: {type: Schema.Types.ObjectId, ref: 'User'},

        name: String,
        
        image: String,
        desc: String,
        
        size: String,
        
        price: { type: Number,
                default: 0
                }
    },

    {
        timeseries: true
    }

)

module.exports = model('Item', itemSchema)

