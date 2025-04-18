import express from "express";
import controller from "../controllers/upload.controller.js";
import middleware from "../middlewares/upload.middleware.js";

const uploadRoutes = express.Router();

uploadRoutes.post('/', middleware.validateImage, controller.upload);
uploadRoutes.get('/:filename', controller.serve);

export default uploadRoutes;