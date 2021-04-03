"use strict";

import "core-js";
import express from "express";
import routes from "./routes";
import { localMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.set("view engine", "pug");
//app.use("/assets", express.static("assets"));
app.use("/assets", express.static(__dirname + "/assets"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.post, postRouter);

export default app;
