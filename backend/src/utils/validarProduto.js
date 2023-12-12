import marcaRepositories from "../repositories/marca.repositories.js";
import tagRepositories from "../repositories/tag.repositories.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";
import validator from "validator";

export async function validarMarca(marcanome) {
  if (!marcanome) return "Insira uma marca";

  const marca = await marcaRepositories.pegarUnico(marcanome);

  if (!marca) return "Marca não encontrada";
}

dotenv.config();
const secretkey = process.env.SECRET_KEY;

export function validarIdUsuario(token) {
  try {
    const id = jwt.verify(token, secretkey, (error, decoded) => {
      return !decoded ? [false, error.message] : [true, decoded.userId];
    });

    if (id[0] && !mongoose.Types.ObjectId.isValid(id[1]))
      throw new Error("O id deve ter um formato válido");

    return id;
  } catch (e) {
    return [false, e.message];
  }
}

export async function validarTags(tags) {
  const tagsExistentes = await tagRepositories.pegarTodos();

  const tagsValidas = tags.every((tag) =>
    tagsExistentes.some((tagExistente) => tag === tagExistente.pk_tagnome)
  );

  if (!tagsValidas) return "Coloque apenas tags válidas";
}

export async function validarProduto(body) {
  const {
    marcanome,
    token,
    modelo,
    genero,
    preco,
    tamanho,
    cores,
    tags,
  } = body;
  if (
    !marcanome ||
    !token ||
    !modelo ||
    !genero ||
    !preco ||
    !tamanho ||
    !cores ||
    !tags
  )
    return [false, "Insira todos os dados!"];
    
  body.fk_marcanome = body.marcanome;
  body.fk_tags = testeJSON(formatArray(body.tags));
  body.cores = testeJSON(body.cores);

  if (!body.fk_tags) return [false, "Informe as tags num formato válida"];
  if (!body.cores) return [false, "Informe as cores num formato válida"];


  const marcavalidada = await validarMarca(body.fk_marcanome);
  if (marcavalidada) return [false, marcavalidada];

  const tagvalidada = await validarTags(body.fk_tags);
  if (tagvalidada) return [false, tagvalidada];

  const id = validarIdUsuario(body.token);
  if (!id[0]) return id;

  body.fk_userId = id[1];

  return [true, body];
}

const testeJSON = (valor) => {

  if (validator.isJSON(valor)) {
    return typeof valor == "string" ? JSON.parse(valor) : valor;
  }

  return false;
};

const formatArray = (texto) => texto.includes('[') & texto.includes(']') ? texto : texto.split(',')
