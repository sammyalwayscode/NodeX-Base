import { Router } from "express";
import { getCar, getOneCar, postCar } from "../controller/carController";

const router = Router();

router.route("/car").get(getCar);
router.route("/car/:id").get(getOneCar);
router.route("/newCar").post(postCar);

export default router;
