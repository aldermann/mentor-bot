import { config } from "dotenv";
config();
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Listening at port 3000");
});
