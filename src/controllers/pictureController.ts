import { Request, Response } from "express";
import { PictureService } from "../services/pictureService";

const service = new PictureService();

export class PictureController {
  static async getPicturesByMediaCode(req: Request, res: Response) {
    try {
      const mediaCode = Number(req.params.mediaCode);
      const pictures = await service.getPicturesByMediaCode(mediaCode);
      res.json(pictures);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar imagens" });
    }
  }

  static async registerPicture(req: Request, res: Response) {
    try {
      await service.registerPicture(req.body);
      res.status(201).json({ message: "Imagem registrada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar imagem" });
    }
  }
}
