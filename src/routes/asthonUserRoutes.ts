import { Router } from "express";
import { AsthonUserController } from "../controllers/asthonUserController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.delete(
  "/deleteOccurrence/:id",
  authenticateToken,
  AsthonUserController.deleteOccurrence
);
router.delete(
  "/deleteUser/:email",
  authenticateToken,
  AsthonUserController.deleteUser
);

export default router;
