import { Router } from "express";
import controller from "../controllers/produto.controller.js";
import uploader from "../config/multer.js";
import { descriptografarTokenUsuario } from "../middlewares/global.middleware.js";
import {
  validarIdProduto,
  validarInfoProduto,
} from "../middlewares/produto.middleware.js";

const routes = Router();

/**
 * @swagger
 * /produto:
 *   post:
 *     tags:
 *       - Produto
 *     summary: cadastrar um produto
 *     description: Realiza o cadastro de um produto
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: produto
 *         description: Informações do produto
 *         schema:
 *           type: object
 *           required:
 *             - userId
 *             - marcanome
 *             - modelo
 *             - genero
 *             - preco
 *             - tamanho
 *             - cores
 *             - tags
 *           properties:
 *             userId:
 *               type: string
 *               example: 654b975e7479aaef625151ca
 *             marcanome:
 *               type: string
 *               example: adidas
 *             modelo:
 *               type: string
 *               example: Tênis Adidas Runfalcon 2.0 Azul
 *             genero:
 *               type: enum("masculino", "feminino","unissex")
 *               example: feminino
 *             preco:
 *               type: number
 *               example: 379.9
 *             tamanho:
 *               type: number
 *               example: 32
 *             cores:
 *               type: array
 *               itemms:
 *                  type: object
 *                  description: Relação de cor e quantidade
 *                  example: {"azul claro": 2}
 *             tags:
 *               type: array
 *               items:
 *                  type: string
 *                  example: corrida
 *
 *     responses:
 *       200:
 *         description: Sucesso ao cadastrar produto
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Requisição mal formatada
 */

// rota para cadastrar um novo produto
routes.post("/", uploader.imagemECampos.single("imagem"), controller.cadastrarProduto);

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
routes.patch("/campo/:id", validarInfoProduto, validarIdProduto, controller.alterarCampos);

// rota para alterar a visualização do produto
routes.patch(
  "/hidden/:id/:token",
  descriptografarTokenUsuario,
  validarIdProduto,
  controller.alterarVisibilidade
);

// rota para atualizar a imagem do produto
routes.patch("/imagem/:id/:token", descriptografarTokenUsuario, validarIdProduto, uploader.imagem.single("imagem"), controller.alterarImagem);

// rota para consultar um produto especifico
routes.get("/:id/:token", descriptografarTokenUsuario, validarIdProduto, controller.consultarProdutoPorId);

export default routes;
