import { Router } from "express";
import { OccurrenceController } from "../controllers/occurrenceController";

const router = Router();

router.get("/getOccurrences", OccurrenceController.getOccurrences);
router.get("/getOccurrenceById/:id", OccurrenceController.getOccurrenceById);
router.post("/registerOccurrence", OccurrenceController.registerOccurrence);

export default router;
