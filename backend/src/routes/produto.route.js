import { Router } from "express";
import controller from "../controllers/produto.controller.js";
import uploader from "../config/multer.js";
import { descriptografarTokenUsuario } from "../middlewares/global.middleware.js";
import {
  validarIdProduto,
  validarInfoProduto,
} from "../middlewares/produto.middleware.js";

const routes = Router();

// rota para cadastrar um novo produto
routes.post(
  "/",
  uploader.imagemECampos.single("imagem"),
  controller.cadastrarProduto
);

// rota para consultar todos os produtos de um usuario
routes.get(
  "/todos/:token",
  descriptografarTokenUsuario,
  controller.consultarTodosPorUsuario
);

// rota para deletar um usuario
routes.delete(
  "/:id/:token",
  descriptografarTokenUsuario,
  validarIdProduto,
  controller.deletarProduto
);


// rota para atualizar os dados do produto
routes.patch(
  "/campo/:id",
  validarInfoProduto,
  validarIdProduto,
  controller.alterarCampos
);

// rota para alterar a visualização do produto
routes.patch(
  "/hidden/:id/:token",
  descriptografarTokenUsuario,
  validarIdProduto,
  controller.alterarVisibilidade
);

// rota para atualizar a imagem do produto
routes.patch(
  "/imagem/:id/:token",
  descriptografarTokenUsuario,
  validarIdProduto,
  uploader.imagem.single("imagem"),
  controller.alterarImagem
);

// rota para consultar um produto especifico
routes.get(
  "/:id/:token",
  descriptografarTokenUsuario,
  validarIdProduto,
  controller.consultarProdutoPorId
);



export default routes;
