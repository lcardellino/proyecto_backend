const express = require('express');
const router = express.Router();
const {index, getPokemon} = require("../controllers/indexController")



router.get('/', index);


router.get("/:id", getPokemon);

module.exports = router