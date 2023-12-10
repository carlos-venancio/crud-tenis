import produtoModel from "../models/Produto.js";

// cadastra um novo produto
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

// consulta todos os produtos do usuario
async function consultarTodosPorUsuario(id) {
  return await produtoModel.find(
    {
      fk_userId: id,
      active: true,
    },
    "-active -__v -fk_userId", { limit: 10 }
  );
}

// deleta um produto
async function deletarProduto(id) {
  return await produtoModel.findByIdAndDelete(id);
}

// consulta um produto pelo id dele
async function consultarProdutoPorId(id, userId) {
  return await produtoModel.findOne({ _id: id },'-active -__v -fk_userId');
}

// esconde um produto, mas mantei ele ainda cadastrado
async function alterarVisibilidade(id) {
  return await produtoModel.findByIdAndUpdate(
    id,
    { $set: { active: false } },
    { new: true }
  );
}

// altera os campos de um produto
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
    fk_marcanome,
    imagem,
    modelo,
    genero,
    _id,
    preco,
    tamanho,
    cores,
    fk_tags,
  };
}

// altera a imagem de um produto
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
    fk_marcanome,
    imagem,
    modelo,
    genero,
    _id,
    preco,
    tamanho,
    cores,
    fk_tags,
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
