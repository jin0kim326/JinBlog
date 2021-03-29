import Post from "../models/post";
import routes from "../routes";

export const category = (req, res) => {
  res.render("category", { pageTitle: "category" });
};

export const post = async (req, res) => {
  const {
    params: { id },
  } = req;
  console.log(`id : ${id}`);
  try {
    const post = await Post.findById(id);
    res.render("post", { pageTitle: "post", post });
  } catch (error) {
    console.log(error);
  }
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
