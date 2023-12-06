import { Router } from "express";
import { pegarTodos } from "../controllers/tag.controller.js";

const routes = Router();

// consulta todas as tags
routes.get("/", pegarTodos);

export default routes;
