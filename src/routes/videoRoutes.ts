import { Router } from "express";
import { VideoController } from "../controllers/videoController";

const router = Router();

router.get(
  "/getVideosByMediaCode/:mediaCode",
  VideoController.getVideosByMediaCode
);
router.post("/registerVideo", VideoController.registerVideo);

export default router;
