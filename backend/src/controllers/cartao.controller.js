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
}