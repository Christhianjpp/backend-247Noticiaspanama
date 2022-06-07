const { Schema, model } = require('mongoose')

const noticiasSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El es obligatorio'],
    },
    cuerpo: {
        type: String,
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    url: {
        type: String,
        default: false
    },
    fecha: {
        type: Date,
        default: new Date().getTime()
    },
    vistas: {
        type: Number
    },
    etiquetas: {
        type: Array
    },
    urlNoticia: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Noticia', noticiasSchema)