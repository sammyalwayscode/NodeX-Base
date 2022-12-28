import { Router } from "express";
import {
  getAuthor,
  getOneAuthor,
  postAuthors,
} from "../controller/authorController";
const router = Router();

router.route("/").get(getAuthor);
router.route("/:authorID").get(getOneAuthor);
router.route("/newAuthor").post(postAuthors);

export default router;
