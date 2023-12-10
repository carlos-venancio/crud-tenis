import pagamentoRepositories from "../repositories/pagamento.repositories";

async function cadastrarPagamento(req,res){
    try {

    }
    catch (e) {
        res.status(500).send({
          message: e.message,
        });
      }
}

export default {
    cadastrarPagamento
}