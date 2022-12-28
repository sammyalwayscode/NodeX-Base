import { Router } from "express";
import { createBooks } from "../controller/bookController";
const router = Router();

router.route("/newBook/:authorBookID").post(createBooks);

export default router;
