import express from "express";
const router = express.Router();
import {
  createProperty,
  deleteProperty,
  updateProperty,
  properties,
  PropertyById,
} from "../controller/main.js";
import { verifyToken } from "../verify.js";
router.route("/").post(verifyToken, createProperty);
router.route("/:propertyId").delete(verifyToken, deleteProperty);
router.route("/:propertyId").put(verifyToken, updateProperty);
router.route("/").get(properties);
router.route("/:propertyId").get(PropertyById);

export default router;
