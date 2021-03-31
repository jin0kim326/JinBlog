"use strict";
import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
});

const category = mongoose.model("category", categorySchema);
export default category;
