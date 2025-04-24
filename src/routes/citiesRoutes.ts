import { Router } from "express";
import { CitiesController } from "../controllers/citiesController";

const router = Router();

router.get("/getCities", CitiesController.getCities);
router.get("/getClientIDByCity/:city", CitiesController.getClientIDByCity);

export default router;
