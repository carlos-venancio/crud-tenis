import repositories from '../repositories/produto.repositories.js'

export async function cadastrarProduto(req,res){

    console.log('Aqui é a função de cadastrar produto')
    let statusCode = 201;

    try {

        // validar campos
        // validar chaves estrangeiras
        // formatar campos para se adequarem ao esquema
        req.body.imagem = req.file.path
 
        const produtoCadastrado = await repositories.cadastrarProduto(req.body)
        
        res.status(statusCode).send({
            status: statusCode,
            message: "Produto cadastrado com sucesso!"
        })
    }

    catch(e){

        statusCode = 500;

        res.status(statusCode).send({
            status: statusCode,
            message: 'Falha ao cadastrar produto',
            desc: e.message
        })
    }
} 