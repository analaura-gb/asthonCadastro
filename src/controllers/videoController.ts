import { Request, Response } from "express";
import * as MediaService from "../services/mediaService";

export const getDuration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.query.id as string);
    const resolution = await MediaService.getDuration(id);

    if (!resolution) {
      res.status(404).json({ error: "No alerts found for this client" });
    }

    res.json(resolution);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar alertas enviados" });
  }
};
