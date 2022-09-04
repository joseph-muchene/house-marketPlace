import express from "express";
const router = express.Router();
import { Register } from "../controller/user.js";
import { verifyToken } from "../verify.js";

router.route("/register").post(Register);

export default router;
