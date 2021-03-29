import express from "express";
import routes from "../routes";
import { about, contact, home } from "../controllers/globalController";
import { category, search } from "../controllers/postController";

const globalRouter = express.Router();

globalRouter.get(routes.about, about);
globalRouter.get(routes.contact, contact);
globalRouter.get(routes.category, category);
globalRouter.get(routes.search, search);

globalRouter.get(routes.home, home);

export default globalRouter;
