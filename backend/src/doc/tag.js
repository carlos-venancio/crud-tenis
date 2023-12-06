
/**
 * @swagger
 * /tag:
 *   get:
 *     tags:
 *       - Tag
 *     summary: consulta todas as tags
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucesso ao consultar as tags
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
 *                              example: [corrida,com cadarço]
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Requisição mal formatada
 */
