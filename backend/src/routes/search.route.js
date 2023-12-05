import { Router } from "express";
import {realizarPesquisa} from "../controllers/search.controller"

routes.get("/", realizarPesquisa);

export default routes;