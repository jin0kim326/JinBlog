import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  thumbnail: { type: String },
  description: { type: String },
  createAt: { type: Date, default: Date.now },
});

const post = mongoose.model("Post", postSchema);
export default post;
