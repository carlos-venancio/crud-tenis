import { validarIdUsuario } from "../utils/validarProduto.js";

export async function descriptografarTokenUsuario(req, res, next) {
  try {
    const tokenDesc =  validarIdUsuario(req.body.token || req.params.token);
    
    if (!tokenDesc[0]) throw new Error(tokenDesc[1]) 

    req.body.fk_userId = tokenDesc[1];
    console.log(req.body)

    next();
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}
