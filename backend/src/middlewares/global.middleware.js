import { validarIdUsuario } from "../utils/validarProduto.js";
import constructorResponse from "../utils/constructorResponse.js";

export async function descriptografarTokenUsuario(req, res, next) {
  try {

    const token = req.body.token || req.params.token

    if (!token) constructorResponse[401](res,"Informe um token")

    const tokenDesc =  validarIdUsuario(req.body.token || req.params.token);
    
    if (!tokenDesc[0]) constructorResponse[400](res,tokenDesc[1]) 

    req.body.fk_userId = tokenDesc[1];

    next();
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}