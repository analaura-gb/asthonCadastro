import { Request, Response } from "express";
import { CommonUserService } from "../services/commonUserService";

const service = new CommonUserService();

export class CommonUserController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await service.register(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await service.login(email, password);
      res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ error: error.message });
      } else {
        res.status(401).json({ error: "Erro desconhecido" });
      }
    }
  }
}
