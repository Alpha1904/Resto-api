import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.use("/", ProductController.getAll);
router.use("/:id", ProductController.getById);
router.use("/", ProductController.create);
router.use("/:id", ProductController.update);
router.use("/:id", ProductController.delete);

export default router;