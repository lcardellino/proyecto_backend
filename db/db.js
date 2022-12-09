const mongoose = require ("mongoose")
require("dotenv").config()


/*---------*FUNC CONECTORA*---------*/
const conect = async () => {
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("*---------* BASE DE DATOS CONECTADA CON EXITO *---------*")
    } catch {
        console.log("*---------* NO SE PUDO CONECTAR A LA BASE DE DATOS *---------*")
    }
};

module.exports = {conect}
