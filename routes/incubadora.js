const express = require('express')
const router = express.Router()
const {crearPokemon, listaPokemons, editarPokemon, verPokemon, eliminarPokemon} = require("../controllers/mongoController")
const {validarId} = require("../middlewares/validarId")
const {check} = require("express-validator")

//**** POKEAPI ****//
// router.get('/pokeapi/:id', getPokemon)

/*---------*GET*---------*/
router.get('/lista', listaPokemons);
router.get('/lista/:id',validarId, verPokemon);



/*---------*POST*---------*/
router.post('/crear', [
    check("nombre").not().isEmpty().withMessage("nombre requerida").isLength({min: 3, max: 15}).withMessage("El nombre debe ser mayor a 3 letras y menor a 10"),  
    check("tipo").not().isEmpty().withMessage("tipo requerida"),
    check("habilidad").not().isEmpty().withMessage("habilidad requerido"),
    check("dificultad").not().isEmpty().withMessage("dificultad requerida"),
    check("nivel").not().isEmpty().withMessage("nivel requerida"),
    check("evolucion").not().isEmpty().withMessage("evolucion requerida"),
], crearPokemon);
//router.post('/crear', crearPokemon); ===========> sin express-validator


/*---------*PUT*---------*/
router.put('/editar/:id', validarId, [
    check("nombre").not().isEmpty().withMessage("nombre requerida").isLength({min: 3, max: 15}).withMessage("El nombre debe ser mayor a 3 letras y menor a 10"),  
    check("tipo").not().isEmpty().withMessage("tipo requerido"),
    check("habilidad").not().isEmpty().withMessage("habilidad requerido"),
    check("dificultad").not().isEmpty().withMessage("dificultad requerida"),
    check("nivel").not().isEmpty().withMessage("nivel requerida"),
    check("evolucion").not().isEmpty().withMessage("evolucion requerida"),], editarPokemon)
//router.put('/editar/:id', editarPokemon); ===========> sin express-validator


/*---------*DELETE*---------*/
router.delete('/delete/:id', validarId, eliminarPokemon)
//router.delete('/delete/:id', eliminarPokemon);  ===========> sin express-validator



module.exports = router;