// - tags
// 	-pk_tagnome
import mongoose from "mongoose";

const Tag = new mongoose.Schema({
  pk_tagnome: {
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
});

export default mongoose.model("Tag", Tag);
