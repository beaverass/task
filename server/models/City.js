const {Schema, model} = require('mongoose')

const citySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
})

module.exports = model('cities', citySchema)

