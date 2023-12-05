const mongoose = require('mongoose')

const itensFav = new mongoose.schema({
    fk_userId: {
        type: String,
        required: true,
    },

    fk_productId: {
        type: String,
        required: true
    }
})

export default mongoose.schema("itensFav", itensFav)