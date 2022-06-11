const { Schema, model } = require('mongoose')

const EtiquetaSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }

})
EtiquetaSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()

    return data
}

module.exports = model('Etiqueta', EtiquetaSchema)