import mongoose from 'mongoose'

const Pagamento = mongoose.Schema({
    fk_produtos: [
        {
          type: String,
          required: true,
          trim: true,
        },
      ],
    total: {
        type:Number,
        required: true,
    },
    numberCard: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("Pagamento", Pagamento);
