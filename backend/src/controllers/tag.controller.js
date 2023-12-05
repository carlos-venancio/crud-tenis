import repositories from "../repositories/tag.repositories.js";

export async function pegarTodos(req, res) {
  let statusCode = 200;

  try {
    const todasTags = await repositories.pegarTodos();
    const nomesTags = todasTags.map((tag) =>  tag.pk_tagnome);

    res.status(statusCode).send({
      status: statusCode,
      results: nomesTags.length,
      data: nomesTags,
    });
  } catch (e) {

    statusCode = 500;

    res.status(statusCode).send({
      status: statusCode,
      message: "Falha ao consultar as tags",
      desc: e.message,
    });
  }
}
