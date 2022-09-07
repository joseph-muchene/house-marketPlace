import express from "express";
const router = express.Router();
import {
  deleteUser,
  getUserById,
  Register,
  SignedUser,
  UpdateUser,
} from "../controller/user.js";
import { verifyToken } from "../verify.js";

// tested --> success
router.route("/register").post(Register);
router.route("/:userId").put(verifyToken, UpdateUser);
router.route("/:userId").delete(verifyToken, deleteUser);
router.route("/logged").get(verifyToken, SignedUser);
router.route("/profile/:userId").get(getUserById);

export default router;
