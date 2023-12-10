<<<<<<< HEAD
import pagamentoModel from "../models/Pagamento.js";

async function cadastrarPagamento(data) {
    
    const body = {
        fk_produtos: data.produtos,
        nomeCompanhia: data.nomeCompanhia,
        nome: data.nome,
        celular: data.celular,
        formaPagamento: {
            nome: data.formapagamento.nome,
            id: data.formapagamento.id,
        },
        parcelas: data.parcelas,
        desconto: data.desconto,
        total: data.total,
        localizacao: {
            estado: data.estado,
            pais: data.pais,
            endereco: data.endereco,
            cep: data.cep,
        },
        observacoes: data.observacoes,
    }

    await new pagamentoModel(body).save()
}

export default {
    cadastrarPagamento,
};
=======
import pagamentoModel from "../models/Pagamento.js";

async function cadastrarPagamento(data) {
    await new pagamentoModel(data).save()
}

export default {
    cadastrarPagamento,
};
>>>>>>> 428a56f98a0cfeb5c500eb8a3aa60af2d069fee1
  