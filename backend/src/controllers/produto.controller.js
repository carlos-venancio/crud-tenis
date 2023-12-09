import repositories from "../repositories/produto.repositories.js";
import fs from "fs";
import { validarProduto } from "../utils/validarProduto.js";
import constructorResponse from "../utils/constructorResponse.js";

async function cadastrarProduto(req, res) {

  try {
    const data = await validarProduto(req.body);

    if (!req.file)
      return res.status(400).json({
        message: "Insira uma imagem!",
      });

    else if (!data[0]) {
      // exclui o arquivos caso não seja válido
      fs.unlinkSync(req.file.path);

      // retorna uma resposta em json com o erro 
      const response = constructorResponse["4000"];
      return response(res, data[1]);
    }

    req.body.imagem = req.file.path;

    // Restante do seu código para cadastrar o produto

    res.status(201).json({
      message: "Produto cadastrado com sucesso!",
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
}

async function consultarTodosPorUsuario(req, res) {
  try {
    const produtos = await repositories.consultarTodosPorUsuario(
      req.body.fk_userId
    );

    res.status(200).send({
      message: "Produtos consultados com sucesso",
      data: produtos,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function deletarProduto(req, res) {
  try {
    const id = req.params.id;
    await repositories.deletarProduto(id);

    res.status(200).send({
      message: "Produto deletado com sucesso",
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function alterarVisibilidade(req, res) {
  try {
    const { modelo, active } = await repositories.alterarVisibilidade(
      req.params.id
    );

    res.status(200).send({
      message: "Visibilidade alterada com sucesso",
      data: {
        modelo,
        active,
      },
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function alterarCampos(req, res) {
  try {
    const produto = await repositories.alterarCampos(req.params.id, req.body);

    res.status(200).send({
      message: "Produto alterado com sucesso",
      data: produto,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function alterarImagem(req, res) {
  try {
    if (!req.file) {
      res.status(400).send({
        message: "Insira uma imagem!",
      });
      return;
    }

    const produto = await repositories.alterarImagem(
      req.params.id,
      req.file.path
    );

    res.status(200).send({
      message: "Imagem alterada com sucesso!",
      data: produto,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function consultarProdutoPorId(req, res) {
  try {
    const produto = await repositories.consultarProdutoPorId(req.params.id);

    // valida se o produto existe
    if (!produto) {
      res.status(404).send({
        message: "Produto não encontrado",
      });
      return;
    }

    res.status(200).json({
      message: "Produto encontrado!",
      data: produto,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

export default {
  cadastrarProduto,
  consultarTodosPorUsuario,
  deletarProduto,
  alterarVisibilidade,
  alterarCampos,
  alterarImagem,
  consultarProdutoPorId,
};
