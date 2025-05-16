import { Request, Response } from "express";
import * as userService from "../services/userService";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newData = {
      name,
      email,
      password: hashedPassword,
      role,
    };
    const user = await userService.postUser(newData);

    if (!user) {
      res.status(404).json({ error: "No user found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ocorrências" });
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.query.email || !req.query.password) {
      res.status(400).json({ error: "Parâmetro 'email' é obrigatório" });
      return;
    }

    const email = req.query.email.toString();
    const password = req.query.password.toString();

    const user = await userService.getProfile(email); // deve retornar objeto único ou null

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: "Senha incorreta" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao autenticar usuário" });
  }
};
