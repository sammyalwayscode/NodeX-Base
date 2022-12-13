import express, { Application, Request, Response } from "express";
import router from "./router/bookRouter";
const PORT: number = 2442;
const app: Application = express();
require("./config/db");
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server Up 🚀🚀🚀",
  });
});

app.use("/server", router);

app.listen(PORT, () => {
  console.log(`Server up on PORT: ${PORT}`);
});
