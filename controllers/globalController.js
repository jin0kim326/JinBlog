import routes from "../routes";
import Post from "../models/post";

export const home = async (req, res) => {
  const posts = await Post.find({});
  console.log(posts);
  res.render("home", { pageTitle: "home", posts });
};

export const about = (req, res) => {
  res.render("about", { pageTitle: "about" });
};

export const contact = (req, res) => {
  res.render("contact", { pageTitle: "contact" });
};
