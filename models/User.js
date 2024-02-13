const { Schema, model, Types } = require("mongoose")

const userSchema = new Schema(
    {
        fullName: { type: String,
                    // unique: true,
                   required: true },
            
        email: { type: String,
                 required: true,
                 unique: true},
        
        password: { type: String,
                    required: true}
                
    },

    {
        timeseries: true
    }

)

module.exports = model("User", userSchema);