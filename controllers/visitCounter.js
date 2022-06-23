const { response } = require("express");


const VisitCounter = require("../models/VisitCounter")

const getVisitCounter = async (rep, res = response) => {

    try {
        let [{ counter }] = await VisitCounter.find()

        res.json({
            ok: true,
            msg: 'Put visit counter',
            counter
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'error'
        })
    }

}


const putVisitCounter = async (rep, res = response) => {

    try {

        const visitCounter = await VisitCounter.findByIdAndUpdate('62b33fc7631e29e75d504e76', { $inc: { counter: 1 } }, { new: true })

        res.json({
            ok: true,
            msg: 'Put visit counter',
            visitCounter
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'error'
        })
    }

}

module.exports = {
    getVisitCounter,
    putVisitCounter
}