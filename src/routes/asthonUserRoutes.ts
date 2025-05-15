import { Router } from "express";
import {
  deleteOccurrence,
  deleteUser,
} from "../controllers/asthonUserController";
import { authenticateToken } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import { Role } from "../models/userModel";

const router = Router();

router.delete(
  "/deleteOccurrence",
  authenticateToken,
  roleMiddleware([Role.ASTHON]),
  deleteOccurrence
);
router.delete(
  "/deleteUser",
  authenticateToken,
  roleMiddleware([Role.ASTHON]),
  deleteUser
);

export default router;
