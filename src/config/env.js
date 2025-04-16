import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.resolve("./.env") });

const env = {
    appName: process.env.APP,
    port: process.env.PORT || 3000,
    host: process.env.HOST || "127.0.0.1",
    dbHost: process.env.DB_HOST || "127.0.0.1",
    dbUser: process.env.DB_USER ||  "root",
    dbPasword: process.env.DB_PASSWORD || "",
    dbName: process.env.DB_NAME,
};

export default env;