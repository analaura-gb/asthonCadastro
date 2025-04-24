import { Request, Response } from "express";
import { AlertsSentService } from "../services/alertsSentService";

const service = new AlertsSentService();

export class AlertsSentController {
  static async getSentAlertsByClientID(req: Request, res: Response) {
    try {
      const { clientID } = req.params;
      const alerts = await service.getSentAlertsByClientID(clientID);
      res.json(alerts);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar alertas enviados" });
    }
  }
}
