import { Router } from "express";
import { getMediaByOccurrence } from "../controllers/mediaController";

const router = Router();

router.get("/getMediaByOccurrence", getMediaByOccurrence);

export default router;
