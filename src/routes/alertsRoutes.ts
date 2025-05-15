import { Router } from "express";
import { getAlertsByCity } from "../controllers/alertsController";

const router = Router();

router.get("/getAlertsByCity", getAlertsByCity);

export default router;
