import { Router } from "express";

const candidatosRoutes = Router()
let candidatos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Capitã Lucimara",
        partido: "PSD",
        idade: 39,
        concorrente: true, // concorrente ao segundo mandato
        Propostas:[
            "Aumento de salário mínimo",
            "Redução de impostos",
            "Mais investimentos em educação"
        ], 
    },

]

candidatosRoutes.get("/", (req, res) => {
    return res.status(200).json(candidatos);
});

candidatosRoutes.post("/", (req, res) => {
    const {nome, partido, idade, concorrente, propostas} = req.body;

    if (!nome || !partido) {
        return res.status(400).send({
            message: "O nome ou partido não foi preenchido!"
        });
    }

    if (idade < 18) {
        return res.status(400).send({
            message: "O candidato não possui idade suficiente para participar deste debate!"
        })
    }


    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome: nome,
        partido: partido,
        idade: idade,
        concorrente: concorrente,
        propostas: propostas
    };

    candidatos.push(novoCandidato)
    return res.status(201).send({
        message: "candidato cadastrado com sucesso!",
        novoCandidato,

    });
});

    candidatosRoutes.delete("/:id", (req, res)=>{
        const { id } = req.params;
        const candidatos = candidatos.find((person)=> person.id == id);

        
    if (!candidatos) {
        return res.status(404).send({
            message: "candidato não encontrada!",
        });
    }

    candidatos = candidatos.filter((candidate) => candidate.id != id)

    return res.status(200).send({
        message: "candidato deletado!", 
        candidatos,
    });
});

export default candidatosRoutes
