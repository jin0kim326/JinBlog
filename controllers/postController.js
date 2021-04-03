"use strict";

import Post from "../models/post";
import routes from "../routes";

export const category = (req, res) => {
  res.render("category", { pageTitle: "category" });
};

export const post = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const post = await Post.findById(id);
    res.render("post", { pageTitle: "post", post });
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = (req, res) => {
  res.render("search", { pageTitle: "search" });
};

export const postSearch = async (req, res) => {
  const {
    body: { term: searchingBy },
  } = req;
  let posts = [];
  try {
    posts = await Post.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("home", { pageTitle: "home", searchingBy, posts });
};

export const getWrite = (req, res) => {
  res.render("write", { pageTitle: "write" });
};

export const postWrite = async (req, res) => {
  const {
    body: { title, description },
    file: { location },
  } = req;
  try {
    const newPost = await Post.create({
      title,
      thumbnail: location,
      description,
    });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
};
