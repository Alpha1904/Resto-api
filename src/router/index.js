import express from "express";
import categoryRouter from "./category.router.js";
import productRouter from "./product.router.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;