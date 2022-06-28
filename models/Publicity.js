const { Schema, model } = require('mongoose')

const PublicitySchema = Schema({
    nombre: {
        type: String
    },
    imagen: {
        type: String
    },
    estado: {
        type: Boolean,
        default: false
    }
})

PublicitySchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}


module.exports = model('Publicity', PublicitySchema)