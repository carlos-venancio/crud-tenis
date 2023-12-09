import cartaoRepositories from '../repositories/cartao.repositories.js';
import constructorResponse from '../utils/constructorResponse.js';

export async function criarCartao(req,res,next){

    if (!req.body.nomeTitular  || !req.body.numeroCartao || !req.body.dataExpiracao || !req.body.cvc) {
        const resposta = constructorResponse['4000'];
        resposta(res,"Informe todos os campos!")
    }

    // validações do numero do cartão e cvc
    // validar data de expedição
    // delimitar nome do titular
    const cartao = await cartaoRepositories.cadastrarCartao(req.body.cartao);

    req.body.formaPagamento = {
        tipo: cartao.tipo,
        id: cartao._id
    }

    next();
}
