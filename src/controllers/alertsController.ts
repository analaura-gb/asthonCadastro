import { Request, Response } from "express";
import * as AlertServices from "../services/alertsService";

export const getAlertsByCity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cityId = parseInt(req.query.cityId as string);
    const alerts = await AlertServices.getAlertsByCity(cityId);

    if (!alerts || alerts.length === 0) {
      res.status(404).json({ error: "No alerts found for this client" });
    }

    res.json(alerts);
  } catch (error) {
    console.error("Erro no getAlertsByClientID:", error);
    res.status(500).json({ error: "Erro ao buscar alertas enviados" });
  }
};
