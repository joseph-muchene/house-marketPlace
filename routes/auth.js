import express from "express";
const router = express.Router();
import { LoginUser } from "../controller/auth.js";

// tested_success
router.route("/login").post(LoginUser);

export default router;
