/**
 * @openapi
 * /video/getDuration:
 *   get:
 *     tags: [Vídeo]
 *     summary: Retorna a duração de um vídeo
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da mídia
 *     responses:
 *       200:
 *         description: Duração do vídeo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Duration'
 *       404:
 *         description: Mídia não encontrada
 *
 * components:
 *   schemas:
 *     Duration:
 *       type: object
 *       properties:
 *         duration:
 *           type: number
 *           example: 60
 */
