const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    id : {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    },
    groups: [
        {
            city: {
                type: String,
                required: true
            },
            district:{
                type: String,
                required: true
            },
            street:{
                type: String,
                required: true
            }
        }
    ]

})

module.exports = model('users', userSchema)