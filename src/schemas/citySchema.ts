/**
 * @openapi
 * /city/getCities:
 *   get:
 *     tags: [Cidade]
 *     summary: Lista todas as cidades cadastradas
 *     responses:
 *       200:
 *         description: Lista de cidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         city:
 *           type: string
 *           example: Itajubá
 *         cityName:
 *           type: string
 *           example: Itajubá
 *         cityLatitude:
 *           type: string
 *           example: "-22.4225"
 *         cityLongitude:
 *           type: string
 *           example: "-45.4598"
 */
