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

router.route("/register").post(Register);
router.route("/:id").put(verifyToken, UpdateUser);
router.route("/:id").delete(verifyToken, deleteUser);
router.route("/logged").get(verifyToken, SignedUser);
router.route("/:userId").get(getUserById);

export default router;
