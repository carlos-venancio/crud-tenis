import produtoModel from "../models/produto.js";

async function cadastrarProduto(body) {
 
  const produto = {
    fk_marcanome: body.marcanome,
    fk_userId: body.fk_userId,
    fk_tags: body.tags,
    cores: body.cores,
    preco: body.preco,
    qtd: body.qtd,
    tamanho: body.tamanho,
    genero: body.genero,
    modelo: body.modelo
  }
  
  const newProduto = new produtoModel(produto);

  return await newProduto.save();
}

export default {
  cadastrarProduto,
};
