export const home = (req, res) => {
  res.render("home");
};

export const about = (req, res) => {
  res.send("About");
};

export const contact = (req, res) => {
  res.send("contact");
};
