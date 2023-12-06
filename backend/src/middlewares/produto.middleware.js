import mongoose from "mongoose";
import produtoRepositories from "../repositories/produto.repositories.js";
import { validarProduto } from "../utils/validarProduto.js";

export async function validarIdProduto(req, res, next) {
  try {
    const id = req.params.id;

    // valida o o formato do id do produto
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({
        message: "Insira um id de produto válido!",
      });
      return;
    }

    const produto = await produtoRepositories.consultarProdutoPorId(
      id,
      req.body.fk_userId
    );

    // valida se o produto existe
    if (!produto) {
      res.status(404).send({
        message: "Produto não encontrado",
      });
      return;
    }

    next();
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

export async function validarInfoProduto(req, res, next) {
  try {
    const id = await validarProduto(req.body);

    if (!id[0]) {
       res.status(400).send({
        message: id[1],
      });
      return
    }
      req.body = id[1]
    next();
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}
