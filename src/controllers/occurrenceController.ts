import { Request, Response } from "express";
import { OccurrenceService } from "../services/occurrenceService";

const service = new OccurrenceService();

export class OccurrenceController {
  static async getOccurrences(req: Request, res: Response) {
    try {
      const occurrences = await service.getOccurrences();
      res.json(occurrences);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar ocorrências" });
    }
  }

  static async getOccurrenceById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const occurrence = await service.getOccurrenceById(id);
      res.json(occurrence);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar ocorrência" });
    }
  }

  static async registerOccurrence(req: Request, res: Response) {
    try {
      await service.registerOccurrence(req.body);
      res.status(201).json({ message: "Ocorrência registrada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar ocorrência" });
    }
  }
}
