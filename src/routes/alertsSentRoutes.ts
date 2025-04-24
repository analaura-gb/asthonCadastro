import { Router } from "express";
import { AlertsSentController } from "../controllers/alertsSentController";

const router = Router();

router.get(
  "/getSentAlertsByClientID/:clientID",
  AlertsSentController.getSentAlertsByClientID
);

export default router;
