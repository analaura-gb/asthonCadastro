import { Request, Response } from "express";
import * as MediaService from "../services/mediaService";

export const getMediaByOccurrence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const occurrenceId = parseInt(req.query.occurrenceId as string);
    const mediaList = await MediaService.getMediaByOccurrence(occurrenceId);
    res.json(mediaList);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar mídias" });
  }
};
