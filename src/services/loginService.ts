import jwt from "jsonwebtoken";
import { User } from "../models/userModel";

const JWT_SECRET = process.env.JWT_SECRET || "secret"; // configure via .env

export class LoginService {
  generateToken(user: User): string {
    return jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
  }

  verifyToken(token: string): User {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as User;
  }
}
