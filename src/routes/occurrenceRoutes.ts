import { Router } from "express";
import {
  getOccurrences,
  getOccurrenceById,
} from "../controllers/occurrenceController";

const router = Router();

router.get("/getOccurrences", getOccurrences);
router.get("/getOccurrenceById", getOccurrenceById);

export default router;
