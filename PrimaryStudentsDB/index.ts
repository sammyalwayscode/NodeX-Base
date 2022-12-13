import express, { Application, Request, Response } from "express";
import myRoutes from "./router/router";
const PORT: number = 2002;
const app: Application = express();
require("./config/db");
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(404).json({
    message: "Server Up ✌️",
  });
});

app.use("/api", myRoutes);

app.listen(PORT, () => {
  console.log(`PORT:${PORT} Running ✌️`);
});
