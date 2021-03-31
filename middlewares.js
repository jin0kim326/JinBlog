"use strict";

import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  region: "ap-northeast-2",
});

const multerImage = multer({
  storage: multerS3({
    s3,
    bucket: "jin-blog/image",
    acl: "public-read",
  }),
});

export const ImageUpload = multerImage.single("thumbnail");

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
