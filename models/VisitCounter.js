const { Schema, model } = require('mongoose')

const VisitCounterSchema = Schema({
    counter: {
        type: Number
    }
})

VisitCounterSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject()
    return data
}


module.exports = model('VisitCounter', VisitCounterSchema)
