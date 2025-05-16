/**
 * @openapi
 * /alerts/getAlertsByCity:
 *   get:
 *     tags: [Alerta]
 *     summary: Lista todos os alertas de uma cidade
 *     parameters:
 *       - in: query
 *         name: cityId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da cidade
 *     responses:
 *       200:
 *         description: Lista de alertas da cidade
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alert'
 *
 * components:
 *   schemas:
 *     Alert:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2025-05-16T13:07:40.433Z
 *         sender:
 *           type: string
 *           example: Defesa Civil
 *         message:
 *           type: string
 *           example: Alerta de enchente iminente.
 *         cityId:
 *           type: integer
 *           example: 1
 */
