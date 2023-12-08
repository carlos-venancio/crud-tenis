import { ObjectId } from 'mongodb';
import mongoose from 'mongoose'
import Produto from './Produto.js';

const Pagamento = mongoose.Schema({
  fk_produtos: [{
    type: Produto,
    required: true,
  }],
  nomeCompanhia: {
    type: String,
  },
  nome: {
    type: String,
    required: true
  },
  celular: {
    type: Number,
    required: true
  },
  formaPagamento: {
    nome: {
      type: String,
      enum: ['cartao de debito/credito'], // 'cash','venmo','paypal','amazon pay',
      required: true
    },
    id: {
      type: ObjectId,
      required: true,
    }
  },
  parcelas: [{
      type: Boolean
    }
  ],
  // relacionar com descontos existentes
  desconto: {
    type: Number
  },
  total: {
    type: Number,
    required: true,
  },
  localizacao: {
    estado: {
      type: String,
      required: true
    },
    pais: {
      type: String,
      required: true
    },
    endereco: {
      type: String,
      required: true
    },
    cep: {
      type: Number,
      required: true
    },
  },
  observacoes: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  addiotionalProperties: false
})


export default mongoose.model("Pagamento", Pagamento);
