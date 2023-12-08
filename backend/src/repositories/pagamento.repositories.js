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
  