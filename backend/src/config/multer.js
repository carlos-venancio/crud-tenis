import multer from "multer";
import path from "path";

import { validarProduto } from "../middlewares/produto.middleware.js";

const uploader = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = async (req, file, cb) => {
  console.log(req.body);

  const validate = await validarProduto(req.body);

  console.log(validate)
  if (validate[0]) {
    req.body.fk_userId = validate[1];
    cb(null, true);
  }
  else {
    cb("Error: " + validate[1], false);
  }

};

export default multer({ storage: uploader, fileFilter });
