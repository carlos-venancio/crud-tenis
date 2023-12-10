import cartaoRepositories from '../repositories/cartao.repositories';

async function criarCartao(req,res,next){

    cartaoRepositories.cadastrarCartao(req.body.cartao)


    next()
}