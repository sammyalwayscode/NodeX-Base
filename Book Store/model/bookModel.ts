import mongoose from "mongoose";

interface books {
  author: string;
  title: string;
  category: string;
  summary: string;
  views: [];
  ISBN: string;
  coverImage: string;
  authorImage: string;
}

interface iBooks extends books, mongoose.Document {}

const bookSchema = new mongoose.Schema(
  {
    author: String,
    title: String,
    category: String,
    summary: String,
    views: [],
    ISBN: String,
    coverImage: String,
    authorImage: String,
  },
  { timestamps: true }
);

export default mongoose.model<iBooks>("books", bookSchema);
