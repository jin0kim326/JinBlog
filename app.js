import "core-js";
import express from "express";
import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";

const app = express();

app.use(routes.home, globalRouter);

export default app;
