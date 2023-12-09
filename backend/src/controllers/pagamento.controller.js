import pagamentoRepositories from "../repositories/pagamento.repositories.js";
import constructorResponse from "../utils/constructorResponse.js";

export async function cadastrarPagamento(req,res){
  
  let statusCode = 2000;
  try {
    
    await pagamentoRepositories.cadastrarPagamento(req.body);
    
    const response = constructorResponse[statusCode]
    response(res,"Pagamento registrado com sucesso")

    }
    catch (e) {
        statusCode = 500;
        const response = constructorResponse[statusCode]
        response(res,e.message)
    }
}