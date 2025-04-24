import { Request, Response } from "express";
import { VideoService } from "../services/videoService";

const service = new VideoService();

export class VideoController {
  static async getVideosByMediaCode(req: Request, res: Response) {
    try {
      const mediaCode = Number(req.params.mediaCode);
      const videos = await service.getVideosByMediaCode(mediaCode);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar vídeos" });
    }
  }

  static async registerVideo(req: Request, res: Response) {
    try {
      await service.registerVideo(req.body);
      res.status(201).json({ message: "Vídeo registrado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar vídeo" });
    }
  }
}
