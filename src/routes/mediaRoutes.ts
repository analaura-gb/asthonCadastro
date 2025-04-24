import { Router } from "express";
import { MediaController } from "../controllers/mediaController";

const router = Router();

router.get("/getAllMedia", MediaController.getAllMedia);
router.post("/registerMedia", MediaController.registerMedia);

export default router;
