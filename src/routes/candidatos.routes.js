import { Router } from "express";

const candidatosRoutes = Router()
let candidatos = [
    {
        id: Math.random() * 1000000,
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
    const {nome, partido, idade, concorrente, Propostas} = req.body;

    const novoCandidato = {
        id: candidato.length + 1,
        nome: nome,
        partido: partido,
        idade: idade,
        concorrente: concorrente,
        propostas: []
    };

    novoCandidato.push(novoCandidato)
    return res.status(201).send(novoCandidato);
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
