import Produto from '../models/produto.model.js';

export const getHomeData = async (req, res) => {
    try {
        const produtos = await Produto.find().limit(3);

        const marcas = [

        ]

        const modelo = [

        ]

        const data = {
            produtos,
            marcas,
            modelo
        };

        res.json(data);
    }catch(error){
        console.error('erro ao obter dados da pagina incial', error);
        res.status(500).json({error:'erro ao obter dados da pagina incial' })
    }
}
    
