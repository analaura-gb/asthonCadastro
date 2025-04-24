import { RequestHandler } from "express";
import { LoginService } from "../services/loginService";

const loginService = new LoginService();

export const authenticateToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Token não fornecido" });
    return;
  }

  try {
    const user = loginService.verifyToken(token);
    (req as any).user = user;
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido" });
  }
};
