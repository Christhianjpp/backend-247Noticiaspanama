const { response } = require("express");
const { ObjectId } = require('mongoose').Types

const Noticia = require("../models/Noticia");
const Categoria = require("../models/Categoria");

const coleccionesPermitdas = [
    'categoria',
    'noticias',
    'noticiaporcategoria',
    'noticiasporetiqueta',
    'categoriayetiqueta'
]

const categoriayetiqueta = async (termino = '', req, res = response) => {

    if (!termino) {
        return res.json({
            msg: "no hay termino",
            termino
        })
    }

    // const { limite = 6, desde = 0 } = req.query

    // const { nombre } = await Categoria.findById(termino)

    // const noticias = await Noticia.find({
    //     $or: [{ "etiquetas": { $elemMatch: { nombre: nombre } } }, { categoria: termino }],
    //     $and: [{ estado: true }]
    // })
    //     .sort({ "fecha": -1 })
    //     .skip(Number(desde))
    //     .limit(Number(limite))
    //     .populate('usuario', 'name')
    //     .populate('categoria', 'nombre')


    const { limite = 6, desde = 0 } = req.query
    const { nombre } = await Categoria.findById(termino)
    const query = { estado: true }


    const [total, noticias] = await Promise.all([
        Noticia.countDocuments({
            $or: [{ "etiquetas": { $elemMatch: { nombre: nombre } } }, { categoria: termino }],
            $and: [{ estado: true }]
        }), Noticia.find({
            $or: [{ "etiquetas": { $elemMatch: { nombre: nombre } } }, { categoria: termino }],
            $and: [{ estado: true }]
        })
            .sort({ "fecha": -1 })
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('usuario', 'name')
            .populate('categoria', 'nombre')
    ])

    return res.json({
        results: (noticias) ? [total, noticias] : []
    })

}


const noticiasporetiqueta = async (termino = '', req, res = response) => {

    if (!termino) {
        return res.json({
            msg: "no hay termino",
            termino
        })
    }

    const esMongoID = ObjectId.isValid(termino) // true

    if (esMongoID) {

        const { limite = 5, desde = 0 } = req.query


        const noticias = await Noticia.find({ "etiquetas": { $elemMatch: { _id: termino } }, estado: true })


            .sort({ "fecha": -1 })
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('categoria', 'nombre')
        return res.json({
            results: (noticias) ? [noticias] : []
        })
    }


}


const buscarNoticias = async (termino = '', req, res = response) => {

    const { limite = 10, desde = 0 } = req.query
    if (!termino) {
        const [total, noticias] = await Promise.all([
            Noticia.countDocuments(),
            Noticia.find()
                .sort({ "fecha": -1 })
                .skip(Number(desde))
                .limit(Number(limite))
                .populate('usuario', 'name')
                .populate('categoria', 'nombre')
        ])

        res.json({
            results: (noticias) ? [total, noticias] : []
        })

        return
    }

    const regex = new RegExp(termino, 'i')
    const noticias = await Noticia.find({
        $or: [{ titulo: regex }, { cuerpo: regex }],
        $and: [{ estado: true }]
    })

    res.json({
        results: (noticias) ? [noticias] : []
    })
}

const noticiaporcategoria = async (termino = '', res = response) => {

    const esMongoID = ObjectId.isValid(termino) // true

    if (esMongoID) {
        const noticias = await Noticia.find({ categoria: ObjectId(termino), estado: true })
            .populate('categoria', 'nombre')
        return res.json({
            results: (noticias) ? [noticias] : []
        })
    }

    const regex = termino.toUpperCase()
    const categorias = await Categoria.find({ nombre: regex, estado: true })

    const noticias = await Noticia.find({ categoria: categorias[0]?._id, state: true })
        .populate('categoria', 'nombre')

    res.json({
        results: (noticias) ? [noticias] : []
    })
}


const buscar = (req, res = response) => {

    const { coleccion, termino } = req.params
    console.log(coleccion)
    console.log(termino)
    if (!coleccionesPermitdas.includes(coleccion)) {
        return res.status(400).json({
            msg: `las colecciones permitidas son ${coleccionesPermitdas}`
        })
    }

    switch (coleccion) {
        case "categoria":

            break
        case "noticias":
            buscarNoticias(termino, req, res)
            break

        case "noticiaporcategoria":
            noticiaporcategoria(termino, res)
            break
        case "noticiasporetiqueta":
            noticiasporetiqueta(termino, req, res)
            break
        case "categoriayetiqueta":
            categoriayetiqueta(termino, req, res)
            break
        default:
            res.status(500).json({
                msg: 'hable con el administrador'
            })

    }

}



module.exports = {
    buscar
}