import { Request, Response } from "express";
import { MediaService } from "../services/mediaService";

const service = new MediaService();

export class MediaController {
  static async getAllMedia(req: Request, res: Response) {
    try {
      const mediaList = await service.getAllMedia();
      res.json(mediaList);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar mídias" });
    }
  }

  static async registerMedia(req: Request, res: Response) {
    try {
      await service.registerMedia(req.body);
      res.status(201).json({ message: "Mídia registrada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar mídia" });
    }
  }
}
