import { Request, Response } from "express";

export class UserController {
  static getProfile(req: Request, res: Response) {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    res.json({ user });
  }
}
