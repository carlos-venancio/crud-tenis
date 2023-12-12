import mongoose from "mongoose";

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
    type: String,    
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
  cores: [{
      type: String,
      required: true,
      trim: true,
    }],
  fk_tags: [{
      type: String,
      required: true,
      trim: true,
    }],
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("Produto", produto);
