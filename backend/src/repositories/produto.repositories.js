import produtoModel from "../models/produto.js";

async function cadastrarProduto(produto) {
  
    const newProduto = new produtoModel({
    fk_userId: produto.fk_userId,
    fk_marcanome: produto.fk_marcanome,
    imagem: produto.imagem,
    modelo: produto.modelo,
    genero: produto.genero,
    preco: produto.preco,
    cores: produto.cores,
    qtd: produto.qtd,
    tamanho: produto.tamanho,
    fk_tags: produto.fk_tags,
  });

  newProduto.save();
}

export default {
    cadastrarProduto
}