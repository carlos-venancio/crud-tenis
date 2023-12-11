import pesquisarNoBanco from '../repositories/search.repository.js';

export const realizarPesquisa = async (req, res) => {
  try {
    const termoPesquisa = req.query.q;

    const resultados = await pesquisarNoBanco(termoPesquisa);

    res.status(200).json({
      message: "Itens encontrados com sucesso",
      resultados,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao realizar a pesquisa",
      error: error.message,
    });
  }
};

export default realizarPesquisa;
