import { Router } from "express";
import Produto from "../models/Produto.js";

const routes = Router();

routes.patch("/produto/campo", (req, res) => {
  Produto.find({})

    .then((produtos) => {
      produtos.map(async (product) => {
        product.imagem = product.imagem.slice(
          product.imagem.lastIndexOf("\\") + 1
        );
        product.imagem = product.imagem.slice(
          product.imagem.lastIndexOf("/") + 1
        );
        product.genero = 'unissex' 
        product.cores = ['preto','branco']
        console.log(product);

        await product.save();
      });

      return res.send("Funcionou");
    })

    .catch((err) => console.log(err));
});

export default routes;
