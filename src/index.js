import express from "express";
import env from "./config/env.js";
import path from "node:path";
import { testConnectionDatabase } from "./config/db.js";
import router from "./router/index.js";
import morgan from "morgan";


const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

testConnectionDatabase();

app.use("/api", router);


app.listen(env.port, env.host, (err) => {
    if (err) {
        console.log(`Error occured went we are try to running our application at: http://${env.host}:${env.port}`);
    }
    console.log("==========================================================");
    console.log(`Our application running at: http://${env.host}:${env.port}`);
    console.log("==========================================================");
});

