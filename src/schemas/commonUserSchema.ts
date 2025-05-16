/**
 * @openapi
 * /common/postOccurrence:
 *   post:
 *     tags: [Comum]
 *     summary: Cadastra uma ocorrência com uma ou mais mídias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               occurrence:
 *                 type: object
 *                 properties:
 *                   description:
 *                     type: string
 *                     example: Deu ruim
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-05-14T14:56:30.000Z
 *                   cityId:
 *                     type: integer
 *                     example: 3
 *               media:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/MediaInput'
 *     responses:
 *       201:
 *         description: Ocorrência e mídias cadastradas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 occurrence:
 *                   $ref: '#/components/schemas/Occurrence'
 *                 media:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MediaWithResolution'
 *
 * components:
 *   schemas:
 *     MediaInput:
 *       type: object
 *       properties:
 *         fileName:
 *           type: string
 *           example: registro_imagem.jpg
 *         type:
 *           type: string
 *           enum: [VIDEO, PICTURE]
 *           example: PICTURE
 *         duration:
 *           type: number
 *           example: 0
 *         resolution:
 *           type: object
 *           properties:
 *             width:
 *               type: integer
 *               example: 1280
 *             height:
 *               type: integer
 *               example: 720
 *     MediaWithResolution:
 *       allOf:
 *         - $ref: '#/components/schemas/MediaInput'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 3
 *             occurrenceId:
 *               type: integer
 *               example: 2
 *     Occurrence:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 2
 *         description:
 *           type: string
 *           example: Deu ruim
 *         cityId:
 *           type: integer
 *           example: 3
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2025-05-14T14:56:30.000Z
 */
