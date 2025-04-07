import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool;

export const connectToDatabase = async () => {
  try {
    if (!pool) {
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    }
    return pool;
  } catch (err) {
    console.error("DB connection error:", err);
    throw err;
  }
};

