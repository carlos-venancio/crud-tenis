import produtoModel from "../models/produto.js";

async function cadastrarProduto(produto) {
 console.log(produto)
  const newProduto = new produtoModel(produto);

  return await newProduto.save();
}

export default {
  cadastrarProduto,
};
