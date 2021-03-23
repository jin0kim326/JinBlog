import "core-js";
import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(routes.home, globalRouter);

export default app;
