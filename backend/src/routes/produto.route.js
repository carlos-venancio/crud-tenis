import { Router } from "express";
import { cadastrarProduto } from "../controllers/produto.controller.js";
import uploader from "../utils/multer.js";

const routes = Router();

// rota para cadastrar um novo produto
routes.post('/', uploader.single('imagem'),cadastrarProduto)

export default routes 