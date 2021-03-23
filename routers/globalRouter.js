import express from "express";
// import routes from "../routes";
import { home } from "../controllers/globalController";

const globalRouter = express.Router();

// globalRouter.use(routes.home, home);
globalRouter.use("/", home);

export default globalRouter;
