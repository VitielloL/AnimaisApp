// schemas que tbm pode ser chamado de models :)
const mongoose = require("mongoose") // mongo db

const AnimalSchema = mongoose.Schema({ // cria o template de como é a coleção
    nome: String,
    especie: String,
    local: String
})

exports.AnimalSchema = AnimalSchema // exporta ela
exports.Animal = mongoose.model("Animal", AnimalSchema, "Animals")  // model do animal