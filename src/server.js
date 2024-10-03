import express from 'express'
import { config } from 'dotenv'

config()
import routes from "./routes/index.routes.js"

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(routes)

const emocoes = [
    {
        id: 1,
        nome: "Alegria",
        cor: "Amarela"
    },

    {
        id: 2,
        nome: "Nojinho",
        cor: "Verde"
    },

    {
        id: 3,
        nome: "Ansiedade",
        cor: "Laranja"
    },
]

const personagens = [
    {
        id: 100,
        nome: "pateta",
        studio: "disney",
        vivo: true
    },

    {
        id: 101,
        nome: "bob esponja",
        studio: "nickelodeon",
        vivo: true
    },

    {
        id: 102,
        nome: "patrick",
        studio: "nickelodeon",
        vivo: true
    },


]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World" })
})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World" })
})

app.get("/emocoes", (req, res) => {
    return res.status(200).send({ message: emocoes })
})

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World" })
})

app.post("/emocoes", (req, res) => {
    const { nome, cor } = req.body
    const newEmotion = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newEmotion)
    return res.status(200).send(emocoes)
})

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})

app.listen(serverPort, () => {
    console.log(`🎀 Server started on http://localhost:${serverPort}`)
})