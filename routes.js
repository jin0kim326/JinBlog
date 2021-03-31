const HOME = "/";
const CATEGORY = "/category";
const ABOUT = "/about";
const CONTACT = "/contact";
const SEARCH = "/search";
const SETTINGS = "/settings";

// POST
const POST = "/post";
const POST_DETAIL = "/:id";
const WRITE = "/write";

const routes = {
  home: HOME,
  category: CATEGORY,
  about: ABOUT,
  contact: CONTACT,
  post: POST,
  postDetail: (id) => {
    if (id) {
      return `/post/${id}`;
    } else {
      return POST_DETAIL;
    }
  },
  search: SEARCH,
  write: WRITE,
  settings: SETTINGS,
};

export default routes;
