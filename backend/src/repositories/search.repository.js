import produto from "../models/Produto.js";

const pesquisarNoBanco = async (termoPesquisa) => {
  try {
    const resultados = await produto.find({
        $or: [
            {modelo: { $regex: new RegExp(termoPesquisa, "i") }},
            {fk_marcanome: { $regex: new RegExp(termoPesquisa, "i") } }
        ]
    });

    console.log('Resultados da Pesquisa:', resultados);

    return resultados;
  } catch (error) {
    console.error('Erro ao realizar a pesquisa:', error.message);
    throw new Error("erro ao realizar a pesquisa");
  }
};



export default pesquisarNoBanco;
