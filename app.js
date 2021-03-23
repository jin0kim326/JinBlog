import "core-js";
import express from "express";
// import routes from "./routes";
import globalRouter from "./routers/globalRouter.js";

const app = express();
const PORT = 3000;

// app.use(routes.home, globalRouter);
app.use("/", globalRouter);

app.listen(PORT, handleListening);

const handleListening = () => {
  console.log(`✅listening at http://localhost:${PORT}`);
};
