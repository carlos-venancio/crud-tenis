import produtoModel from "../models/Produto.js";

async function cadastrarProduto(body) {

  const produto = {
    fk_marcanome: body.fk_marcanome,
    fk_userId: body.fk_userId,
    fk_tags: body.fk_tags,
    cores: body.cores,
    preco: body.preco,
    tamanho: body.tamanho,
    genero: body.genero,
    modelo: body.modelo,
    imagem: body.imagem,
  };

  const newProduto = new produtoModel(produto);

  return await newProduto.save();
}

async function consultarTodosPorUsuario(id) {
  return await produtoModel.find(
    {
      fk_userId: id,
      active: true,
    },
    "-active -__v"
  );
}

async function deletarProduto(id) {
  return await produtoModel.findByIdAndDelete(id);
}

async function consultarProdutoPorId(id, userId) {
  return await produtoModel.findOne({ _id: id, fk_userId: userId },'-active -__v');
}

async function alterarVisibilidade(id) {
  return await produtoModel.findByIdAndUpdate(
    id,
    { $set: { active: false } },
    { new: true }
  );
}

async function alterarCampos(id, body) {
  
  const {
    fk_marcanome,
    imagem,
    modelo,
    genero,
    _id,
    preco,
    tamanho,
    cores,
    fk_tags,
  } = await produtoModel.findByIdAndUpdate(id, body, { new: true });

  return {
    marcanome: fk_marcanome,
    imagem,
    modelo,
    genero,
    id: _id,
    preco,
    tamanho,
    cores,
    tags: fk_tags,
  };
}

async function alterarImagem(id, url) {
  const {
    fk_marcanome,
    imagem,
    modelo,
    genero,
    _id,
    preco,
    tamanho,
    cores,
    fk_tags,
  } = await produtoModel.findByIdAndUpdate(id, { imagem: url }, { new: true });

  return {
    marcanome: fk_marcanome,
    imagem,
    modelo,
    genero,
    id: _id,
    preco,
    tamanho,
    cores,
    tags: fk_tags,
  };
}

export default {
  cadastrarProduto,
  consultarTodosPorUsuario,
  deletarProduto,
  consultarProdutoPorId,
  alterarVisibilidade,
  alterarCampos,
  alterarImagem,
};
