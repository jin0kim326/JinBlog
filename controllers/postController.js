import Post from "../models/post";
import routes from "../routes";

export const category = (req, res) => {
  res.render("category", { pageTitle: "category" });
};

export const post = (req, res) => {
  res.render("post", { pageTitle: "post" });
};

export const search = (req, res) => {
  res.render("search", { pageTitle: "search" });
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
