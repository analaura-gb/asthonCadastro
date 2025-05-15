import { Request, Response } from "express";
import * as OccurrenceService from "../services/occurrenceService";

export const getOccurrences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const occurrences = await OccurrenceService.getOccurrences();
    if (!occurrences || occurrences.length === 0) {
      res.status(404).json({ error: "No occurrences found" });
    }
    res.json(occurrences);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ocorrências" });
  }
};

export const getOccurrenceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.query.id as string);
    const occurrence = await OccurrenceService.getOccurrenceById(id);
    if (!occurrence) {
      res.status(404).json({ error: "No occurrence found for this id" });
    }
    res.json(occurrence);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ocorrência" });
  }
};
