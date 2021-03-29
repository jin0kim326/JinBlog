import express from "express";
import { getWrite, postWrite, post } from "../controllers/postController";
import { ImageUpload } from "../middlewares";
import Post from "../models/post";
import routes from "../routes";

const postRouter = express.Router();

postRouter.get(routes.write, getWrite);
postRouter.post(routes.write, ImageUpload, postWrite);
postRouter.get(routes.postDetail(), post);

export default postRouter;
