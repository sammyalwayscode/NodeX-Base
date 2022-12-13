import { Router } from "express";
import { getStudents, newStudent } from "../controller/controller";
const router = Router();

router.route("/").get(getStudents);
router.route("/new").post(newStudent);

export default router;
