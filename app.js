const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const {conect} = require("./db/db");


const indexRouter = require("./routes/index");
const incubadoraRouter = require("./routes/incubadora");
//const pokeapiRouter = require("./routes/pokeapi");

const app = express();

app.use(logger("test"));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/incubadora", incubadoraRouter);
//app.use("/pokeapi", pokeapiRouter);

conect();

module.exports = app;
