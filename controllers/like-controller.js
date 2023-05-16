import express from "express";
import Blog from "../model/Blog";
import Comment from "../model/coment";
import mongoose from "mongoose";
import User from "../model/User";
import Like from "../model/Like";
import likeRouter from "../routes/like";

export const addlike = async (req, res, next) => {
  let currentuser = req.user;
  let id = req.params.blog_id;
  try {
    Blog.findByIdAndUpdate({ id: req.params.blog_id });
    Like.findOne({
      blog_id: req.params.id,
      user_id: req.currentuser._id,
    });

    let bloglikedoc = new Like({
      blog_id: id,
      user_id: req.currentuser._id,
    });

    let likedata = await bloglikedoc.save();
    Blog.updateOne({
      id: blog_id,
    });
  } catch (error) {
    res.status(403).send("error in like section");
    console.log(error);
  }
  res.status(200).send("like succesfully");
};
