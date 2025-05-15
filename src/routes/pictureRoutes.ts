import { Router } from "express";
import { getResolution } from "../controllers/pictureController";

const router = Router();

router.get("/getResolution", getResolution);

export default router;
