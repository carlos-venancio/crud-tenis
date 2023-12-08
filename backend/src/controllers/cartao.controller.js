import cartaoRepositories from "../repositories/cartao.repositories.js";

async function cadastrarCartao(req,res){
    try {

    }
    catch (e) {
        res.status(500).send({
          message: e.message,
        });
      }
}

export default {
    cadastrarCartao
}