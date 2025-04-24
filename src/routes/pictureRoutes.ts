import { Router } from "express";
import { PictureController } from "../controllers/pictureController";

const router = Router();

router.get(
  "/getPicturesByMediaCode/:mediaCode",
  PictureController.getPicturesByMediaCode
);
router.post("/registerPicture", PictureController.registerPicture);

export default router;
