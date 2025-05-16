/**
 * @openapi
 * /media/getMediaByOccurrence:
 *   get:
 *     tags: [Mídia]
 *     summary: Lista todas as mídias de uma ocorrência
 *     parameters:
 *       - in: query
 *         name: occurrenceId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da ocorrência
 *     responses:
 *       200:
 *         description: Lista de mídias vinculadas à ocorrência
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Media'
 *
 * components:
 *   schemas:
 *     Media:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         fileName:
 *           type: string
 *           example: registro_video.mp4
 *         type:
 *           type: string
 *           enum: [VIDEO, PICTURE]
 *           example: VIDEO
 *         duration:
 *           type: number
 *           example: 60
 *         width:
 *           type: integer
 *           example: 1920
 *         height:
 *           type: integer
 *           example: 1080
 *         occurrenceId:
 *           type: integer
 *           example: 1
 */
