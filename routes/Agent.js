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
router.route("/").post(verifyToken, isAdmin, createAgent);
router.route("/:agentId").delete(verifyToken, isAdmin, deleteAgent);
router.route("/:agentId").put(verifyToken, isAdmin, updateAgent);
router.route("/").get(verifyToken, isAdmin, Allgents);
router.route("/:agentId").get(verifyToken, isAdmin, AgentById);

export default router;
