import marcaRepositories from "../repositories/marca.repositories.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

export async function validarMarca(marcanome) {
  if (!marcanome) return "Insira uma marca";

  const marca = await marcaRepositories.pegarUnico(marcanome);

  if (!marca) return "Marca não encontrada";
}

dotenv.config();
const secretkey = process.env.SECRET_KEY;

export function validarId(token) {

  const id = jwt.verify(token, secretkey, (error, decoded) => {
    if (!decoded) return [false, error.message];

    return [true,decoded.userId];
  });

  if (id[0] && !mongoose.Types.ObjectId.isValid(id[1]))
    return [false,"O id deve ter um formato válido"];

  return id;
}

export async function validarProduto(body) {
  try {
    const marcaValidada = await validarMarca(body.marcanome)

    if (marcaValidada) throw new Error(marcaValidada);

    const id = validarId(body.token);

    return id;
  } catch (e) {
    return [false, e.message];
  }
}
