import { Router } from "express";
import { getDuration } from "../controllers/videoController";

const router = Router();

router.get("/getDuration", getDuration);

export default router;
