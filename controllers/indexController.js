const axios = require("axios");

/*---------*INDEX*---------*/
const index = (req, res) => {
    res.status(200).send('Bienvenido a la PokeApi')   
};

// /*---------*CONSULTA POKEAPI*---------*/
const getPokemon = async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`);
    res.status(200).json( { data: response.data});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el Pokémon' });
  }
}; 



module.exports = { index, getPokemon }