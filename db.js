import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/jin-blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleError = () => {
  console.log("❌ 디비 연결 불가 ❌");
};

const handleOpen = () => {
  console.log("✅ 디비 연결 완료");
};

db.on("error", handleError);
db.once("open", handleOpen);
