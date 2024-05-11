import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/Users.route.js";
import apiErrorHandler from "./middlewares/apiErrorHandler.js";
import cors from "cors";
config({
  path: "./config/.env",
});

// cors config 
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.get("/", (req, res) => {
  res.send("HI FROM BACKEND");
});

// routes 
app.use("/api/v1/", usersRouter);

app.use(apiErrorHandler);

export default app


