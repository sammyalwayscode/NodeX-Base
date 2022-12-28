import authorModel from "../model/authorModel";

import { Response, Request } from "express";

// get:
const getAuthor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const authorDetails = await authorModel.find();
    return res.status(200).json({
      message: "Successfully got author details",
      data: authorDetails,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't get Author details",
      data: error,
    });
  }
};
// getOneAuthor:
const getOneAuthor = async (req: Request, res: Response): Promise<Response> => {
  try {
    const authorDetails = await authorModel.findById(req.params.authorID);
    return res.status(200).json({
      message: `${req.params.authorID} gotten Sucessfully`,
      data: authorDetails,
    });
  } catch (error) {
    return res.status(400).json({
      message: `Couldn't get ${req.params.authorID}`,
      data: error,
    });
  }
};

// Post:
const postAuthors = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { bio, authorName } = req.body;
    const newAuthor = await authorModel.create({
      authorImg: authorName.charAt(0),
      authorName,
      bio,
    });
    return res.status(201).json({
      message: "Successfully uploaded a new author",
      data: newAuthor,
    });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({
      message: "Couldn't create authors",
      data: error,
    });
  }
};

export { getAuthor, getOneAuthor, postAuthors };
