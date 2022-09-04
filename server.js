import express from "express";
const app = express();
// middlewares
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { ConnectDatabase } from "./config/ConnectDb.js";

ConnectDatabase();
// init middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("listening on PORT " + PORT);
});
