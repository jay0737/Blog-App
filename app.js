import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import commentRouter from "./routes/coment-router";
import likeRouter from "./routes/like";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.use("/api", commentRouter);
app.use("/api", likeRouter);
mongoose
  .connect(
    "mongodb+srv://jaypal3:7qV5On14GBlpD9QR@cluster0.jgaxucm.mongodb.net/test"
  )
  .then(() => app.listen(6000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 6000")
  )
  .catch((err) => console.log(err));
