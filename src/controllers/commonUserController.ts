import { Request, Response } from "express";
import * as OccurrenceService from "../services/occurrenceService";
import * as MediaService from "../services/mediaService";

export const postOccurrence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { occurrence, media } = req.body;

    const createdOccurrence = await OccurrenceService.postOccurrence(
      occurrence
    );

    if (!createdOccurrence) {
      res.status(404).json({ error: "Erro ao cadastrar ocorrência" });
      return;
    }

    const createdMediaList = [];

    for (const m of media) {
      const createdMedia = await MediaService.postMedia({
        ...m,
        occurrenceId: createdOccurrence.id, // garantir vinculação correta
      });
      createdMediaList.push(createdMedia);
    }

    res.status(201).json({
      occurrence: createdOccurrence,
      media: createdMediaList,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido" });
    }
  }
};
