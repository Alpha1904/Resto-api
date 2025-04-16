import env from "./env.js";
import mysql from "mysql2/promise"

const createPool = () => {
    try {
      return mysql.createPool({
        host: env.dbHost,
        user: env.dbUser,
        password: env.dbPasword,
        database: env.dbName,
      });
  
    } catch (error) {
      console.error(`Could not connect to the database.`);
      process.exit(1);
    }
  };
  
  const pool = createPool();
  
  export const testConnectionDatabase = async()=>{
      try {
        await pool.getConnection();  
        console.log(`Database connect successfully !!!`);
      } catch (error) {
          console.log(`Failed to connect to the Database !!!`);
          console.error(error);
      }
  };
  
  export default pool;