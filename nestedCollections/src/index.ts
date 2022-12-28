import express, { Application, Request, Response } from "express";

import authorRoute from "../router/authorRouter";
import bookRoute from "../router/bookRouter";
require("../config/db");
const PORT: number = 2003;
const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(404).json({ message: "Server Running 🚀🚀🚀" });
});

app.use("/api/author", authorRoute);
app.use("/api/book", bookRoute);

app.listen(PORT, () => {
  console.log("Server Up");
});
