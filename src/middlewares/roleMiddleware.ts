import { Request, Response, NextFunction } from "express";
import { Role } from "../models/userModel";

export const roleMiddleware = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user || !user.role) {
      res.status(403).json({ error: "Acesso negado: usuário não autenticado" });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({ error: "Acesso negado: permissão insuficiente" });
      return;
    }

    next();
  };
};
