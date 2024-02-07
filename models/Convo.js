const { Schema, model } = require('mongoose')

const convoSchema = new Schema (
    {
        sender: {type: Schema.Types.ObjectId, ref: 'User'},

        receiver: {type: Schema.Types.ObjectId, ref: 'User'},

        messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
    },

    {
        timeseries: true,
        timestamps: true
    }
)

module.exports = model('Convo', convoSchema)
