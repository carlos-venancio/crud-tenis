import marcaRepositories from "../repositories/marca.repositories.js";
import tagRepositories from "../repositories/tag.repositories.js";
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

export function validarIdUsuario(token) {
  const id = jwt.verify(token, secretkey, (error, decoded) => {
    return !decoded ? [false,error.message] : [true, decoded.userId];
  });

  if (id[0] && !mongoose.Types.ObjectId.isValid(id[1]))
    return [false,"O id deve ter um formato válido"];

  return id;
}

export async function validarTags(tags) {
  
  const tagsExistentes = await tagRepositories.pegarTodos();

  const tagsValidas = tags.every((tag) =>
    tagsExistentes.some((tagExistente) => tag === tagExistente.pk_tagnome)
  );

  if (!tagsValidas) return "Coloque apenas tags válidas";
}

export async function validarProduto(body) {
 

  body.cores = typeof body.cores == 'string' ? JSON.parse(body.cores) : body.cores;
  body.fk_tags = Array.isArray(body.tags) ? body.tags : JSON.parse(body.tags) ;
  body.fk_marcanome = body.marcanome

  const { fk_marcanome, token, modelo, genero, preco, tamanho, cores, fk_tags } = body;
  console.log(body)
  if ( !fk_marcanome ||!token ||!modelo ||!genero ||!preco || !tamanho ||!cores || !fk_tags )  return [false,"Insira todos os dados!"];
  
  const marcavalidada = await validarMarca(body.fk_marcanome);
  if (marcavalidada) return [false,marcavalidada]
  
  const tagvalidada = await validarTags(body.fk_tags);
  if (tagvalidada) return [false,tagvalidada]


  const id = validarIdUsuario(body.token);
  if (!id[0]) return id

  body.fk_userId = id[1];
  
  return [true,body];
}
