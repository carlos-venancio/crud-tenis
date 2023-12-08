import { pesquisarNoBanco } from "../repositories/search.repository.js";


export const realizarPesquisa = async (req, res) => {
  try {
    const termoPesquisa = req.query.q;

    res.status(200).json({
      message: "item encontrado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      message: "erro ao achar item",
      error: error.message,
    });
  }
};

export default realizarPesquisa;
