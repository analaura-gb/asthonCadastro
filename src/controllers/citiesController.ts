import { Request, Response } from "express";
import { CitiesService } from "../services/citiesService";

const service = new CitiesService();

export class CitiesController {
  static async getCities(req: Request, res: Response) {
    try {
      const cities = await service.getCities();
      res.json(cities);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar cidades" });
    }
  }

  static async getClientIDByCity(req: Request, res: Response) {
    try {
      const { city } = req.params;
      const result = await service.getClientIDByCity(city);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar clientID" });
    }
  }
}
