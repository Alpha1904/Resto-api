import express from "express";
import env from "./config/env.js";
import path from "node:path";
import { testConnectionDatabase } from "./config/db.js";
import router from "./router/index.js";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import uploadConfig from "./config/fileUpload.js";
import uploadRoutes from "./router/upload.routes.js";


const app = express();
app.use(morgan("dev"));
app.use(fileUpload(uploadConfig));
app.use('/uploads', express.static('public/uploads'));
app.use('/upload', uploadRoutes);

app.use("/api", router);

app.listen(env.port, env.host, (err) => {
    if (err) {
        console.log(`Error occured went we are try to running our application at: http://${env.host}:${env.port}`);
    }
    console.log("==========================================================");
    console.log(`Our application running at: http://${env.host}:${env.port}`);
    console.log("==========================================================");
});

