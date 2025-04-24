import { Router } from "express";
import { CommonUserController } from "../controllers/commonUserController";

const router = Router();

router.post("/register", CommonUserController.register);
router.post("/login", CommonUserController.login);

export default router;
