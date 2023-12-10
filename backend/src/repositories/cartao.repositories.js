<<<<<<< HEAD
import cartaoModel from '../models/Cartao.js'

async function cadastrarCartao(data){
    await new cartaoModel(data).save()
}

export default {
    cadastrarCartao
=======
import cartaoModel from '../models/Cartao.js'

async function cadastrarCartao(data){
    await new cartaoModel(data).save()
}

export default {
    cadastrarCartao
>>>>>>> 428a56f98a0cfeb5c500eb8a3aa60af2d069fee1
};