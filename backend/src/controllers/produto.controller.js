import repositories from "../repositories/produto.repositories.js";

export async function cadastrarProduto(req, res) {
  let statusCode = 201;

  try {
    console.log(req.body);
    req.body.imagem = req.file.path;
    console.log(JSON.parse(req.body.cores));
    // let cores = Object.(req.body.cores);
    // req.body.cores = cores;
    req.body.tags = JSON.parse(req.body.tags);
    req.fk_marcanome = req.body.marcanome;
    // validar campos
    // validar chaves estrangeiras
    // formatar campos para se adequarem ao esquema

    await repositories.cadastrarProduto(req.body);

    res.status(statusCode).send({
      status: statusCode,
      message: "Produto cadastrado com sucesso!",
    });
  } catch (e) {
    statusCode = 500;

    res.status(statusCode).send({
      status: statusCode,
      message: "Falha ao cadastrar produto",
      desc: e.message,
    });
  }
}
