//get all comment
import { getAllBlogs } from "./blog-controller";
import commentRouter from "../routes/coment-router";
import express from "express";
import Blog from "../model/Blog";
import Comment from "../model/coment";
import mongoose from "mongoose";
import User from "../model/User";

export const getallcomment = async (req, res, next) => {
  try {
    const section = Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!section) {
    return res.status(404).json({ message: "No comment Found" });
  }

  return res.status(200).json({ section });
};

// add comment

export const addcomment = async (req, res, next) => {
  // find out which post you are commenting

  try {
    const id = req.params.id;
    // get the comment text and record post id
    const comment = new Comment({
      text: req.body.text,
      blog: id,
    });

    console.log(req.body.text);
    // save comment
    const addedComment = await comment.save();
    return res.status(200).json({ message: "Comment added successfully." });
  } catch (error) {
    res.status(400).send("error in comment");
  }
};
