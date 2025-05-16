/**
 * @openapi
 * /user/getProfile:
 *   get:
 *     tags: [Usuário]
 *     summary: Retorna Token ao Fazer Login
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Email do usuário
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: Senha do usuário
 *     responses:
 *       200:
 *         description: Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *
 * /user/postUser:
 *   post:
 *     tags: [Usuário]
 *     summary: Cadastra novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Ana
 *         email:
 *           type: string
 *           example: ana.laura@gmail.com
 *         password:
 *           type: string
 *           example: ana123
 *         role:
 *           type: string
 *           enum: [COMMON, ASTHON]
 *           example: ASTHON
 */
