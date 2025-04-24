import { Router } from "express";
import { authenticateToken } from "../middlewares/authMiddleware";
import { UserController } from "../controllers/userController";

const router = Router();

router.get("/me", authenticateToken, UserController.getProfile);

export default router;
