import { Router } from "express";
import {realizarPesquisa} from "../controllers/search.controller"

routes.get("/search", realizarPesquisa);

export default routes;
