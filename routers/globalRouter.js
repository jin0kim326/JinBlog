import express from "express";
import routes from "../routes";
import { about, contact, home } from "../controllers/globalController";
import {
  category,
  post,
  search,
  getWrite,
  postWrite,
} from "../controllers/postController";

const globalRouter = express.Router();

globalRouter.get(routes.about, about);
globalRouter.get(routes.contact, contact);
globalRouter.get(routes.category, category);
globalRouter.get(routes.search, search);

globalRouter.get(routes.write, getWrite);
globalRouter.post(routes.write, postWrite);

globalRouter.get(routes.home, home);
globalRouter.get(routes.post, post);

export default globalRouter;
