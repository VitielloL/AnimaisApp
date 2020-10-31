const express = require("express") // usa a biblioteca express do mongo
const { Animal } = require("../schemas/animal") // utiliza o schema de animal (template)
const router = express.Router() // instanciando um router do express


// router passa pelo schema fazendo um read nele msm
router.get("/", async function (req, res) {
    const animais = await Animal.find();
    res.json({
        animais
    })
})

//read que pega 1 usuario
router.get("/:id", async function (req, res) {
    const { id } = req.params
    const animal = await Animal.findById(id);
    res.json({
        animal
    })
})

//criar
router.post("/", async function (req, res) {
    const { nome, especie, local } = req.body;
    const newAnimal = new Animal({
        nome: nome,
        especie: especie,
        local: local
    });
    const returnAnimal = await newAnimal.save();
    return res.json({ Animal: returnAnimal })
})
//delete
router.delete("/:id", async function (req, res) {
    const { id } = req.params
    await Animal.deleteOne({
        _id: id
    })
    res.status(200)
    return res.send()
})
//update
router.put("/:id", async function (req, res) {
    const { id } = req.params
    const { nome, especie, local } = req.body;
    const updateAnimal = await Animal.findByIdAndUpdate(id, {
        nome: nome,
        especie: especie,
        local: local
    }, {
        new: true
    })
    res.status(200)
    return res.json({
        Animal: updateAnimal
    })
})

module.exports = router