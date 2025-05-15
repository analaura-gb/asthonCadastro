import { Router } from "express";
import { getProfile, postUser } from "../controllers/userController";

const router = Router();

router.get("/getProfile", getProfile);
router.post("/postUser", postUser);

export default router;
