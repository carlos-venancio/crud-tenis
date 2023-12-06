
/**
 * @swagger
 * /marca:
 *   get:
 *     tags:
 *       - Marca
 *     summary: consulta todas as marcas
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucesso consultar todas as marcas
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          type: number
 *                          example: 200
 *                      results:
 *                          type: number
 *                          example: 10
 *                      data:
 *                          type: array
 *                          items:
 *                              type: string
 *                              example: adidas
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Requisição mal formatada
 */