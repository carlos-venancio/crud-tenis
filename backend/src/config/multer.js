import multer from "multer";
import path from "path";

import { validarProduto } from "../utils/validarProduto.js";

const uploader = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = async (req, file, cb) => {
  try {
    const data = await validarProduto(req.body);

    if (!data[0]) throw new Error(data[1]);

    req.body = data[1];

    cb(null, true);
  } catch (e) {
    cb("Error: " + e.message, false);
  }
};

export default {
  imagemECampos: multer({ storage: uploader, fileFilter }),
  imagem: multer({ storage: uploader }),
};
