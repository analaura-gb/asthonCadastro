import { Request, Response } from "express";
import * as CityService from "../services/cityService";

export const getCities = async (req: Request, res: Response): Promise<void> => {
  try {
    const cities = await CityService.getCities();
    if (!cities || cities.length === 0) {
      res.status(404).json({ error: "Não há cidades" });
    }
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar cidades" });
  }
};
