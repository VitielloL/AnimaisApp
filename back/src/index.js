const express = require("express") // biblioteca express do node para fazer um servidor web
const mongoose = require("mongoose") // mongo db
const app = express() // utilizo a biblioteca do node
const animal = require("../routes/animal") // rota de animais
const cors = require("cors")


app.use(express.json()) // força as chamadas a serem lidas como json

mongoose.connect("mongodb://localhost/multiangular") // conecta o mongo na rota

app.use(cors())

app.use("/animal", animal) // app usa a rota de animal com /animal

app.listen(5000) // porta que o servidor vai escutar
