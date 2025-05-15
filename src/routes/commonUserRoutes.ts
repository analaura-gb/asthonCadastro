import { Router } from "express";
import { postOccurrence } from "../controllers/commonUserController";
import { authenticateToken } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { Role } from "../models/userModel";

const router = Router();

router.post(
  "/postOccurrence",
  authenticateToken,
  roleMiddleware([Role.COMMON]),
  postOccurrence
);

export default router;
