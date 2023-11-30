import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const secretkey = process.env.SECRET_KEY;

export async function descriptografarTokenUsuario(req, res, next) {
  try {

    const id = jwt.verify(req.body.token, secretkey, (error, decoded) => {
      if (!decoded) throw new Error(error.message)
      console.log(decoded)
      return decoded.userId;
    });

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res
        .status(404)
        .send({
          status: 400,
          message: "Id inválido!",
        })
        .end();
      return;
    }

    req.body.fk_userId = id;

    next();
  } catch (e) {
    res.status(500).send({
        status: 500,
        message: e.message
    });
  }
}

const id = jwt.verify(req.body.token, secretkey, (error, decoded) => {
  if (!decoded) throw new Error(error.message);

  console.log(decoded)
  return decoded.userId;
});

if (!mongoose.Types.ObjectId.isValid(id)) new Error("O id deve ter um formato válido")
else {
  req.body.fk_userId = id;
  cb(null, true);
}