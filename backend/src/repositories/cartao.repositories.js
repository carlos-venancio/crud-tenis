import cartaoModel from '../models/Cartao.js'

async function cadastrarCartao(data){
    await new cartaoModel(data).save()
}

export default {
    cadastrarCartao
};