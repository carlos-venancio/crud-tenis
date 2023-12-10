import { Router } from "express";
import controller from "../controllers/pagamento.controller.js";
import middlewarePagamento from "../middlewares/pagamento.middleware.js";
import { descriptografarTokenUsuario } from "../middlewares/global.middleware.js";

const routes = Router();

// cadastrar um pagamento e , caso não haja, um cartão
routes.post(
  "/",
  descriptografarTokenUsuario,
  middlewarePagamento.criarCartao,
  controller.cadastrarPagamento
);

export default routes;