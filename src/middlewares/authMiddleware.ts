import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Token ausente ou inválido" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string") {
      res.status(401).json({ error: "Token inválido" });
      return;
    }

    const { id, email, role } = decoded as any;

    (req as any).user = { id, email, role };
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
    return;
  }
};
