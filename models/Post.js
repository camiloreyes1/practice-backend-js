const { Schema, model } = require('mongoose')

const postSchema = new Schema(

    {
        owner: {type: Schema.Types.ObjectId, ref: 'User'},

        image: String,

        description: String,

        

    }
)