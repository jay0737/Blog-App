import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
});

export default mongoose.model("Like", LikeSchema);
