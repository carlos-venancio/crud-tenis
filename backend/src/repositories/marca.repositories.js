import marcaModel from "../models/Marca.js";

async function pegarTodos() {
  return await marcaModel.find();
}

async function pegarUnico(marca){
  console.log(marca)
  return await marcaModel.findOne({
    pk_marcanome: marca
  })
}

export default {
    pegarTodos,
    pegarUnico
}