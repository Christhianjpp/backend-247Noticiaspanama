const Categoria = require("../models/Categoria")
const Noticia = require("../models/Noticia")


const existeNoticiaPorId = async (id = "") => {
    const noticia = await Noticia.findById(id)
    if (!noticia) {
        throw new Error('La noticia no existe')
    }
}
const existeNoticiaPorUrl = async (urlNoticia = "") => {
    const noticia = await Noticia.find({ urlNoticia })
    if (!noticia) {
        throw new Error('La noticia no existe')
    }
}



const existeCategoriaPorId = async (id = '') => {
    const categoria = await Categoria.findById(id)
    if (!categoria) {
        throw new Error('La categoria no existe')
    }
}


module.exports = {
    existeNoticiaPorId,
    existeCategoriaPorId,
    existeNoticiaPorUrl
}