import express from "express";
import routes from "../routes";
import {
  about,
  getContact,
  postContact,
  home,
  getSettings,
  postSettings,
} from "../controllers/globalController";
import { category, search } from "../controllers/postController";

const globalRouter = express.Router();

globalRouter.get(routes.about, about);
globalRouter.get(routes.contact, getContact);
globalRouter.post(routes.contact, postContact);
globalRouter.get(routes.category, category);
globalRouter.get(routes.search, search);
globalRouter.get(routes.settings, getSettings);
globalRouter.post(routes.settings, postSettings);
globalRouter.get(routes.home, home);

export default globalRouter;
