import express, { json, Request, Response } from "express";
import { router as v1Routes } from "./src/routes/v1/index.routes";
import "express-async-errors";
import mongoose from "mongoose";
import cors from "cors";
import { db_creds } from "./src/utility/config";
import errorHandler from "./src/middlewares/error_handler";
const app = express();

app.use(json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Working");
});

app.use("/v1", v1Routes);
app.use(errorHandler);
const start = async () => {
  try {
    await mongoose.connect(db_creds.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongo Db Connected");
  } catch (error) {
    console.log(error);
  }
};

start();

export { app };
