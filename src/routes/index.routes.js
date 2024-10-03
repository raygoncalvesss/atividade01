import { Router } from "express";
import personagensRouter from "./personagens.routes.js";
import emocoesRoutes from "./emocoes.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({message:"spfc"})
});

routes.get("/2tds2", (req,res) => {
    return res.status(200).send({message:"hello 2tds2"})
});

routes.use("/emocoes", emocoesRoutes);
routes.use("/personagens", personagensRouter);

export default routes;

