import repositories from '../repositories/produto.repositories.js'

export async function cadastrarProduto(req,res){
    repositories.cadastrarProduto()
} 