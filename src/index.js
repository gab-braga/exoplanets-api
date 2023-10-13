import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import { apiRouter } from "./routes/api.js";
app.use(apiRouter);

app.listen(3002, () => {
  console.log("Server running in port 3002.");
});
