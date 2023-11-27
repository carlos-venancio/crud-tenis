import { Router } from "express";
import { cadastrarProduto } from "../controllers/produto.controller.js";

const routes = Router();

routes.post('/', cadastrarProduto)

export default routes