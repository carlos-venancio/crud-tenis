import cartaoRepositories from "../repositories/cartao.repositories.js";
import constructorResponse from "../utils/constructorResponse.js";

async function criarCartao(req, res, next) {

  if (
    !req.body.cartao.nomeTitular ||
    !req.body.cartao.numeroCartao ||
    !req.body.cartao.dataExpiracao ||
    !req.body.cartao.cvc || 
    !req.body.cartao.tipo
  ) {
    return constructorResponse[400](res, "Informe todos os campos do cartão!");
  }

  // validações do numero do cartão e cvc
  // validar data de expedição
  // delimitar nome do titular
  const cartao = await cartaoRepositories.cadastrarCartao(req.body.cartao, req.body.fk_userId);

  req.body.formaPagamento = {
    tipo: cartao.tipo,
    id: cartao._id,
  };

  next();
}

export default {
  criarCartao,
};
