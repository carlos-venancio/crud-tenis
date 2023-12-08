import repositories from "../repositories/produto.repositories.js";
import uploader from "../config/multer.js";
import multer from 'multer'
const addImage = uploader.imagemECampos.single("imagem")

async function cadastrarProduto(req, res) {

   addImage(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send({
        messgae: err.message
      });
    }
  })

  try {
    console.log('teste')
    if (!req.file) {
      res.status(400).send({
        message: "Insira uma imagem!",
      });
      return;
    }

    req.body.imagem = req.file.path;

    await repositories.cadastrarProduto(req.body);

    res.status(201).send({
      message: "Produto cadastrado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message:  e.message,
    });
  }
}

async function consultarTodosPorUsuario(req, res) {
  try {
    const produtos = await repositories.consultarTodosPorUsuario(
      req.body.fk_userId
    );

    res.status(200).send({
      message: "Produtos consultados com sucesso",
      data: produtos,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function deletarProduto(req, res) {
  try {
    const id = req.params.id;
    await repositories.deletarProduto(id);

    res.status(200).send({
      message: "Produto deletado com sucesso",
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function alterarVisibilidade(req, res) {
  try {
    const { modelo, active } = await repositories.alterarVisibilidade(
      req.params.id
    );

    res.status(200).send({
      message: "Visibilidade alterada com sucesso",
      data: {
        modelo,
        active,
      },
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
}

async function alterarCampos(req,res) {
  try{

    const produto = await repositories.alterarCampos(req.params.id,req.body)
    

    res.status(200).send({
      message: "Produto alterado com sucesso",
      data: produto
    });

  } catch (e) {
    res.status(500).send({
      message:  e.message,
    });
  }


}

async function alterarImagem(req,res) {
  try {
    
    if (!req.file) {
      res.status(400).send({
        message: "Insira uma imagem!",
      });
      return;
    }

    const produto = await repositories.alterarImagem(req.params.id,req.file.path);

    res.status(200).send({
      message: "Imagem alterada com sucesso!",
      data: produto
    });
  } catch (e) {
    res.status(500).send({
      message:e.message,
    });
  }
}

async function consultarProdutoPorId(req,res) {
  try {
    
    const produto = await repositories.consultarProdutoPorId(req.params.id, req.body.fk_userId);

    res.status(200).json({
      message: "Produto encontrado!",
      data: produto
    })

  } catch (e) {
    res.status(500).send({
      message:  e.message,
    });
  }
}




export default {
  cadastrarProduto,
  consultarTodosPorUsuario,
  deletarProduto,
  alterarVisibilidade,
  alterarCampos,
  alterarImagem,
  consultarProdutoPorId
};
