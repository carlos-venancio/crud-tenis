import produto from "../models/Produto"

export const pesquisarNoBanco = async(marca, modelo) => {
    try{
        const resultados = await produto.find({
            $or: [
                {marca: {$regex: new RegExp(termoPesquisa, "i")}},
                {modelo: {$regex: new RegExp(termoPesquisa, "i")}}
            ]
        })

        return resultados;
    }catch(error){
        throw new Error("erro ao realizar a pesquisa")
    }
};