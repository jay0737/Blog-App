import express from "express";
import Blog from "../model/Blog";
import Comment from "../model/coment";
import mongoose from "mongoose";
import User from "../model/User";
import { addlike } from "../controllers/like-controller";
const likeRouter = express.Router();

likeRouter.post("/blogs/:id/likes", addlike);

export default likeRouter;
