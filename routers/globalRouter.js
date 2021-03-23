import express from "express";
import routes from "../routes.js";
import { home } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.use(routes.home, home);

export default globalRouter;
