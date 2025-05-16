/**
 * @openapi
 * /occurrence/getOccurrences:
 *   get:
 *     tags: [Ocorrência]
 *     summary: Lista todas as ocorrências
 *     responses:
 *       200:
 *         description: Lista de ocorrências
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Occurrence'
 *
 * /occurrence/getOccurrenceById:
 *   get:
 *     tags: [Ocorrência]
 *     summary: Busca uma ocorrência pelo ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da ocorrência
 *     responses:
 *       200:
 *         description: Ocorrência encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Occurrence'
 *       404:
 *         description: Ocorrência não encontrada
 *
 * components:
 *   schemas:
 *     Occurrence:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         description:
 *           type: string
 *           example: Deslizamento de terra
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2025-05-16T13:07:40.080Z
 *         cityId:
 *           type: integer
 *           example: 1
 */
