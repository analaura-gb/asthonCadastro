import { Request, Response } from "express";
import { AsthonUserService } from "../services/asthonUserService";

const service = new AsthonUserService();

export class AsthonUserController {
  static async deleteOccurrence(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await service.deleteOccurrence(id);
      res.json({ message: "Ocorrência deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar ocorrência" });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { email } = req.params;
      await service.deleteUser(email);
      res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }
}
