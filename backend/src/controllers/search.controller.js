import { pesquisarNoBanco } from "../repositories/search.repository";

export const realizarPesquisa = async(req, res) => {
    try{
        const termoPesquisa = req.body.q;
        const resultadoPesquisa = await pesquisarNoBanco(termoPesquisa);
        res.status(200).json({result: "pesquisa realizada com sucesso", data: resultadoPesquisa});
    }catch(error){
        res.status(500).json({result: "erro ao pesquisar"});
    }
}  