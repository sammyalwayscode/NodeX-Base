import { Request, Response } from "express";
import mongoose from "mongoose";
import authorModel from "../model/authorModel";
import bookModel from "../model/bookModel";

const createBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, category, summary } = req.body;
    const myAuthor = await authorModel.findById(req.params.authorBookID);
    const newBook = await bookModel.create({
      title,
      coverImage: title.charAt(0),
      category,
      summary,
      authorName: myAuthor?.authorName,
    });

    myAuthor?.books.push(new mongoose.Types.ObjectId(newBook._id));
    myAuthor?.save();

    return res.status(201).json({
      message: "Book Created Sucessfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't create authors",
      data: error,
    });
  }
};

export { createBooks };
