import pagamentoModel from "../models/Pagamento.js";

async function cadastrarPagamento(data) {
    await new pagamentoModel(data).save()
}

export default {
    cadastrarPagamento,
};
  