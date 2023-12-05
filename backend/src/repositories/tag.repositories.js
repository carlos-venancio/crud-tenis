import tagModel from "../models/Tag.js";

async function pegarTodos() {
  return await tagModel.find();
}


export default {
    pegarTodos
}