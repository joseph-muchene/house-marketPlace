import dotenv from "dotenv";
dotenv.config({});
import express from "express";
const app = express();
// middlewares
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";
import AuthRoute from "./routes/auth.js";
import agentRoute from "./routes/Agent.js";
import propertyRoute from "./routes/property.js";
import { ConnectDatabase } from "./config/ConnectDb.js";

ConnectDatabase();
// init middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/agent", agentRoute);
app.use("/api/v1/property", propertyRoute);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("listening on PORT " + PORT);
});
