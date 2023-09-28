import mongoose from "mongoose";
import connect from "../../../database/connect";
import Blogs from "../../../models/blogs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connect.connect();

    const {post_id} = req.body;
    const questions = await Blogs.findOne({post_id: post_id});
    if (questions) {
      res.status(200).json(questions);
    } else {
      res.status(409).json({ message: "Something went wrong"});
    }
  }
}
