import mongoose from 'mongoose'

const Cartao = mongoose.Schema({
    nomeTitular: {
        type: String,
        required: true
    },
    numeroCartao: {
        type: Number,
        required: true
    },
    dataExperiracao: {
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
    additionalProperties: false,
})

export default mongoose.model('Cartao', Cartao) 