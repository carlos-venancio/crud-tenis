// - marca
//          -pk_marcanome
import mongoose from "mongoose";

const Marca = new mongoose.Schema({
  pk_marcanome: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
});

export default mongoose.model("Marca", Marca);
