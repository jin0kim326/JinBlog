"use strict";

import routes from "../routes";
import Post from "../models/post";
import Category from "../models/category";
import mail, { sendEmail } from "../mail";

export const home = async (req, res) => {
  const posts = await Post.find({});

  res.render("home", { pageTitle: "home", posts });
};

export const about = (req, res) => {
  res.render("about", { pageTitle: "about" });
};

export const getContact = (req, res) => {
  res.render("contact", { pageTitle: "contact" });
};

export const postContact = (req, res) => {
  //send mail
  const {
    body: { email, name, message },
  } = req;
  sendEmail(email, name, message);

  res.send("success");
};

export const getSettings = async (req, res) => {
  try {
    const categorys = await Category.find({});

    res.render("settings", { pageTitle: "settings", categorys });
  } catch (error) {
    console.log(error);
  }
};

export const postSettings = (req, res) => {
  res.render("settings", { pageTitle: "settings" });
};
