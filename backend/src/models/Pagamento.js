import { ObjectId } from 'mongodb';
import mongoose from 'mongoose'
import Produto from './Produto.js';

const Pagamento = mongoose.Schema({
  fk_produtos: [{
    // cria um produto baseado em produto
    type: Produto.schema,
    required: true,
  }],
  fk_userId: {
    type: ObjectId,
    reuired: true
  },
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
    tipo: {
      type: String,
      enum: ['debito','credito'], // 'cash','venmo','paypal','amazon pay',
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
})


export default mongoose.model("Pagamento", Pagamento);
