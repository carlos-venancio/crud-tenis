import { Router } from "express";
import { realizarPesquisa } from "../controllers/search.controller.js";

const routes = Router();

routes.get("/", realizarPesquisa);

export default routes;
