const itensFav = require('../models/Favoritos')
const produto = require('../models/Produto')

const novoFav = async(req, res) =>{
    try{
        const {fk_userId} = req.body;
        const {pk_productId} = req.body

        const jaFav = await itensFav.findOne({fk_userId, pk_productId})

        if(existingFavorite) {
            return.res.status(400).json({message: 'produto ja favoritado pelo usuario'})
        }

        const novoItemFav = new itensFav({fk_userId, pk_productId})
        await novoItemFav.save();

        res.json(newFavoriteItem);
    }catch(error){
        console.error(error);
        res.status(500).send('erro ao adicionar produto aos favoritos.')
    }
}