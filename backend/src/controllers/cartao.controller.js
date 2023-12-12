<<<<<<< HEAD
import cartaoRepositories from "../repositories/cartao.repositories.js";
import uploader from '../config/multer.js'

const addImage = uploader.imagemECampos.single('imagem')

async function cadastrarCartao(req,res){

  try {
      addImage((req,res) => {
        
        
      })

      res.status(400)
    }
    catch (e) {
        res.status(500).send({
          message: e.message,
        });
      }
}

export default {
    cadastrarCartao
=======
import cartaoRepositories from "../repositories/cartao.repositories.js";

async function cadastrarCartao(req,res){

  try {

      res.status(400)
    }
    catch (e) {
        res.status(500).send({
          message: e.message,
        });
      }
}

export default {
    cadastrarCartao
>>>>>>> 428a56f98a0cfeb5c500eb8a3aa60af2d069fee1
}