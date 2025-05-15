import { Request, Response } from "express";
import * as UserService from "../services/userService";
import * as OccurrenceService from "../services/occurrenceService";
import * as MediaService from "../services/mediaService";

export const deleteOccurrence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.query.id) {
      res.status(400).json({ error: "Parâmetro id é obrigatório" });
      return;
    }

    const id = parseInt(req.query.id as string);
    console.log(id);

    const deletedMedias = await MediaService.deleteMedia(id);
    if (!deletedMedias) {
      res.status(404).json({ error: "Media não encontrado" });
    }

    const deletedOccurence = await OccurrenceService.deleteOccurrence(id);
    if (!deletedOccurence) {
      res.status(404).json({ error: "Ocorrência não encontrado" });
    }

    res.status(200).json({ message: "Ocorrência deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao ocorrência usuário" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.query.email) {
      res.status(400).json({ error: "Parâmetro 'email' é obrigatório" });
      return;
    }

    const email = req.query.email.toString();

    const deleted = await UserService.deleteUser(email);
    if (!deleted) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
