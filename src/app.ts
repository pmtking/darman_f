import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const mongo = process.env.MONGO_URL || "mongodb://localhost:27017/myapp";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongo)
  .then(() => {
    console.log("DB connected successfully.");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

app.listen(PORT, () => {
  console.log("Server is running on port 5000.");
});

export default app;
