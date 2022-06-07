const { response } = require("express")
const Categoria = require("../models/Categoria")



const obtenerCategorias = async (req, res = response) => {

    try {
        const categorias = await Categoria.find({ estado: true })

        res.json({
            ok: true,
            categorias
        })

    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const obtenerCategoria = async (req, res = response) => {
    const id = req.params.id
    try {
        const categorias = await Categoria.findById(id)

        res.json({
            ok: true,
            categorias
        })

    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const crearCategoria = async (req, res = response) => {
    const nombre = req.body.nombre.toUpperCase()

    const categoriaDB = await Categoria.findOne({ nombre })

    if (categoriaDB) {
        return res.status(400).json({
            ok: false,
            msg: `La categoria ${nombre} ya existe`
        })
    }

    try {

        const data = {
            nombre
        }
        const categoriaModal = await Categoria(data)
        const categoria = await categoriaModal.save()

        res.json({
            ok: true,
            msg: 'crearCategoria',
            categoria
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',

        })
    }

}

const actualizarCategoria = async (req, res = response) => {
    const id = req.params.id
    let { nombre } = req.body

    if (req.body.nombre) {  // si envia el nombre, se verifica si existe

        nombre = nombre.toUpperCase()

        const categoriaDB = await Categoria.findOne({ nombre })

        if (categoriaDB) {
            return res.status(400).json({
                ok: false,
                msg: `La categoria ${nombre} ya existe`
            })
        }
    }

    try {
        const data = {
            nombre

        }
        const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true })

        res.json({
            ok: true,
            msg: 'actualizarCategoria',
            categoria
        })

    } catch (error) {
        console.log(error)
        console.state(500).log(error)
        res.json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}

const eliminarCategoria = async (req, res = response) => {
    const id = req.params.id

    await Categoria.findByIdAndDelete(id)
    res.json({
        ok: true,
        msg: 'Se elimino la categoria'
    })

}

module.exports = {
    obtenerCategorias,
    obtenerCategoria,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
}