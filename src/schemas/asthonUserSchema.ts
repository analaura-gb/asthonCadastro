/**
 * @openapi
 * /asthon/deleteOccurrence:
 *   delete:
 *     tags: [Asthon]
 *     summary: Deleta uma ocorrência pelo ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *           example: 2
 *         required: true
 *         description: ID da ocorrência
 *     responses:
 *       200:
 *         description: Ocorrência deletada com sucesso
 *       404:
 *         description: Ocorrência não encontrada
 *
 * /asthon/deleteUser:
 *   delete:
 *     tags: [Asthon]
 *     summary: Deleta um usuário pelo email
 *     parameters:
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           example: asthon@example.com
 *         required: true
 *         description: Email do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
