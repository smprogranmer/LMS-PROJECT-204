import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import apiErrorHandler from "./middlewares/apiErrorHandler.js";
import cors from "cors";
import usersRouter from "./routes/Users.route.js";
import coursesRouter from "./routes/Courses.route.js";

config({
  path: "./config/.env",
});
// const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

// cors config 
const corsOptions = {
  origin: ["http://localhost:5173","http://localhost:4173",process.env.CLIENT_URL],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser())
app.get("/", (req, res) => {
  res.send("HI FROM BACKEND");
});

// courses()
// routes 

app.use("/api/v1/", usersRouter);

app.use("/api/v1/", coursesRouter);

app.use(apiErrorHandler);



export default app


