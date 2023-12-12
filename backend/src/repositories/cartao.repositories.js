import cartaoModel from "../models/Cartao.js";

async function cadastrarCartao(data, fk_userId) {
  return await new cartaoModel({ ...data, fk_userId }).save();
}

export default {
  cadastrarCartao,
};
