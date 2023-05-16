import express from "express";
import Blog from "../model/Blog";
import Comment from "../model/coment";
import mongoose from "mongoose";
import User from "../model/User";
import { getallcomment, addcomment } from "../controllers/comment-controller";
const commentRouter = express.Router();

// get all comment by id

//commentRouter.get("/:id/comment", getallcomment);

//add coment in  blog

commentRouter.post("/blogs/:id/comments", addcomment);

export default commentRouter;
