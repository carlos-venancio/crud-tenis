import mongoose from 'mongoose'
import { ObjectId } from 'mongodb';

const Cartao = mongoose.Schema({
    nomeTitular: {
        type: String,
        required: true
    },
    numeroCartao: {
        type: Number,
        required: true
    },
    dataExpiracao: {
      type: Date,
      required: true
    },
    cvc: {
        type: String,
        required: true,
        maxLength: [3, "Informe apenas 3 digitos para o CVC"]
    },
    fk_userId: {
        type: ObjectId,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        enum: ["debito","credito"]
    },
})

export default mongoose.model('Cartao', Cartao) 