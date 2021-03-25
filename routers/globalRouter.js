import express from "express";
import routes from "../routes";
import { about, contact, home } from "../controllers/globalController";
import { category, post, search } from "../controllers/postController";

const globalRouter = express.Router();

globalRouter.use(routes.about, about);
globalRouter.use(routes.contact, contact);
globalRouter.use(routes.category, category);
globalRouter.use(routes.post, post);
globalRouter.use(routes.search, search);
globalRouter.use(routes.home, home);

export default globalRouter;
