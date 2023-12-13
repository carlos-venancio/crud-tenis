/**
 * @swagger
 * components:
 *   schemas:
 *     Pagamento:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         fk_produtos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ProdutoItem'
 *         nome:
 *           type: string
 *           example: "Fulano"
 *         celular:
 *           type: integer
 *           example: 1199999999
 *         cartao:
 *           $ref: '#/components/schemas/Cartao'
 *         total:
 *           type: number
 *           example: 200
 *         localizacao:
 *           $ref: '#/components/schemas/Localizacao'
 *         observacoes:
 *           type: string
 *           example: Achei muito caro
 *           required: false
 *         nomeCompanhia:
 *           type: string
 *           example: Amazon
 *           required: false
 *     
 *     ProdutoItem:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "656d2bde784e0e47e74b68d6"
 *         fk_userId:
 *           type: string
 *           example: "654b975e7479aaef625151ca"
 *         fk_marcanome:
 *           type: string
 *           example: "olympikus"
 *         imagem:
 *           type: string
 *           example: "1701653470511.jpg"
 *         modelo:
 *           type: string
 *           example: "tênis olympikus"
 *         genero:
 *           type: string
 *           example: "feminino"
 *         preco:
 *           type: number
 *           example: 379.9
 *         tamanho:
 *           type: integer
 *           example: 32
 *         cores:
 *           type: array
 *           items:
 *             type: string
 *           example: ["preto"]
 *         fk_tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["corrida", "sem cadarço"]
 * 
 *     Cartao:
 *       type: object
 *       properties:
 *         nomeTitular:
 *           type: string
 *           example: "Beltrano Silva Souza"
 *         tipo:
 *           type: string
 *           example: "credito"
 *         dataExpiracao:
 *           type: string
 *           example: "2023/10/21"
 *         numeroCartao:
 *           type: string
 *           example: "1234567890123456"
 *         cvc:
 *           type: string
 *           example: "123"
 *     
 *     Localizacao:
 *       type: object
 *       properties:
 *         estado:
 *           type: string
 *           example: "SP"
 *         pais:
 *           type: string
 *           example: "BR"
 *         endereco:
 *           type: string
 *           example: "Av. Atlantica, 2020"
 *         cep:
 *           type: integer
 *           example: 12345678
 */

/**
 * @swagger
 * /pagamento:
 *   post:
 *     tags:
 *       - Pagamento
 *     summary: cadastra um pagamento e cartao
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: pagamento
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Pagamento'
 *     responses:
 *       200:
 *          description: Sucesso ao cadastrar pagamento
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Requisição mal formatada
 */
 