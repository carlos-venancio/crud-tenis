import produto from "../models/Produto.js";

export const pesquisarNoBanco = async (termoPesquisa) => {
  try {
    const resultados = await produto.find({
        $or: [
            {modelo: { $regex: new RegExp(termoPesquisa, "i") }},
            {fk_marcanome: { $regex: new RegExp(termoPesquisa, "i") } }
        ]
    });

    return resultados;
  } catch (error) {
    throw new Error("erro ao realizar a pesquisa");
  }
};
