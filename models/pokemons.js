const mongoose = require("mongoose")

const Schema = mongoose.Schema

const pokemonsSchema = new Schema({
    nombre: {
        type: String,
        required: false
    },
    tipo:{
        type: String,
        required: true
    },
    habilidad: {
        type: String,
        required: true
    },
    dificultad: {
        type: Number,
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
    evolucion: {
    type: Boolean,
    required: true
    },
})

const Pokemon = mongoose.model('Pokemon', pokemonsSchema);
module.exports = {Pokemon}