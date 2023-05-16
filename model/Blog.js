import mongoose from "mongoose";
import Comment from "./coment";
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date },
});

export default mongoose.model("Blog", blogSchema);
