const {Pokemon} = require("../models/pokemons");
const {validationResult} = require("express-validator");
//const axios = require("axios")

const crearPokemon = async(req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
        const item = new Pokemon(req.body)
        await item.save()
        res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501),json({error})
    }
};

const editarPokemon = async (req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Pokemon.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg: "se actualizo el Pokemon"})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
        
    }
};


const listaPokemons = async(req, res) => {
    const items = await Pokemon.find() 
    res.status(200).json({items})
};


const verPokemon = async(req, res) => {
    const item = await Pokemon.findById(req.params.id)
    res.status(200).json({item})
};


const eliminarPokemon = async (req, res) => {
    const item = await Pokemon.findByIdAndDelete(req.params.id);
    res.status(204).json({msg: "Eliminaste al Pokemon: ", item})
};


module.exports = {crearPokemon, listaPokemons, verPokemon, editarPokemon, eliminarPokemon}