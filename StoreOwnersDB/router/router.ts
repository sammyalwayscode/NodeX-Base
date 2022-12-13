import { Router } from "express";
import { oneStore, allStore, createStore } from "../controller/controller";
const router = Router();

router.route("/allStore").get(allStore);
router.route("/allStore/:id").get(oneStore);
router.route("/newStore").post(createStore);

export default router;
