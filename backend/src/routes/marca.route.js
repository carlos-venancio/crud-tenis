import { Router } from "express";
import { pegarTodos } from "../controllers/marca.controller.js"

const routes = Router();

// consulta todas as marcas 
routes.get('/',pegarTodos)

export default routes;