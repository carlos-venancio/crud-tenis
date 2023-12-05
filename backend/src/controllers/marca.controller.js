import repositories from "../repositories/marca.repositories.js";

export async function pegarTodos(req, res) {
  let statusCode = 200;

  try {
    const todasMarcas = await repositories.pegarTodos();
    const nomesMarcas = todasMarcas.map((marca) =>  marca.pk_marcanome);

    res.status(statusCode).send({
      status: statusCode,
      results: nomesMarcas.length,
      data: nomesMarcas,
    });
  } catch (e) {

    statusCode = 500;

    res.status(statusCode).send({
      status: statusCode,
      message: "Falha ao consultar marcas",
      desc: e.message,
    });
  }
}
