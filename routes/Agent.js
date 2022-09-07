import express from "express";
const router = express.Router();
import {
  createAgent,
  updateAgent,
  deleteAgent,
  Allgents,
  AgentById,
} from "../controller/Agents.js";
import { isAdmin } from "../controller/user.js";
import { verifyToken } from "../verify.js";
// tested -- success
router.route("/").post(verifyToken, isAdmin, createAgent);
// tested --> success
router.route("/delete/:id").delete(verifyToken, isAdmin, deleteAgent);
// tested --> success
router.route("/update/:id").put(verifyToken, isAdmin, updateAgent);
// tested -- success
router.route("/").get(verifyToken, isAdmin, Allgents);
// tested -- success
router.route("/:agentId").get(verifyToken, isAdmin, AgentById);

export default router;
