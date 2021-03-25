import "core-js";
import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";

const app = express();
app.set("view engine", "pug");
app.use(routes.home, globalRouter);
app.use(routes.home, postRouter);

export default app;
