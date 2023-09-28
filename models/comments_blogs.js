import mongoose from "mongoose";

const blogcommentsSchema = new mongoose.Schema({
  post_id: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  authorUsername: {
    type: String,
    required: true,
  },
  authorImageUrl: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    default: Date.now,
  },
  body: {
    type: String,
    required: true,
  },
});

const BlogComments =
  mongoose.models.blogcomments || mongoose.model("blogcomments", blogcommentsSchema);

export default BlogComments;
