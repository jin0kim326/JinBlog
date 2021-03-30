import routes from "../routes";
import Post from "../models/post";
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
  console.log(`email: ${email}, name : ${name}, message : ${message}`);
  sendEmail(email, name, message);
  res.send("success");
};
