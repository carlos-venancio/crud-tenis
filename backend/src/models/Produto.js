import mongoose from "mongoose";

// - produto
// fk_userId
// fk_marcanome
// imagem
// modelo
// genero
// preco
// cores
// qtd
// tamanho
// fk_tags

const produto = new mongoose.Schema({
  fk_userId: {
    type: String,
    required: true,
  },
  fk_marcanome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  genero: {
    type: [String, 'Insira um genero valido: masculino, feminino, unissex'],
    enum: ["masculino", "feminino", "unissex"],
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  tamanho: {
    type: Number,
    required: true,
  },
  cores: [
    {
      type: [Map, "Insira o objeto corretamente: 'cor': qtd"],
      of: Number,
      lowercase: true,
    },
  ],
  fk_tags: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("Produto", produto);
