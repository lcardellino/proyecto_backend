const {Pokemon} = require("../models/pokemons")


const validarId = async (req, res, next) => {
    try {
        const item = await Pokemon.findById(req.params.id)
        if (item!== null) {
            next()
        } else {
            res.status(500).json({msg: "Error, el id ingresado no corresponde a un Pokemon valido"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
} 


module.exports = { validarId } 