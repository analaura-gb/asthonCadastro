/**
 * @openapi
 * /picture/getResolution:
 *   get:
 *     tags: [Imagem]
 *     summary: Retorna a resolução de uma imagem
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da mídia
 *     responses:
 *       200:
 *         description: Resolução da imagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resolution'
 *       404:
 *         description: Mídia não encontrada
 *
 * components:
 *   schemas:
 *     Resolution:
 *       type: object
 *       properties:
 *         width:
 *           type: integer
 *           example: 1280
 *         height:
 *           type: integer
 *           example: 720
 */
