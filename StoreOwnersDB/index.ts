import express, { Application, Request, Response } from "express";
import storeRoute from "./router/router";
const PORT: number = 2002;
const app: Application = express();
require("./config/db");

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server Up 🚀🚀🚀",
  });
});

app.use("/api", storeRoute);

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
