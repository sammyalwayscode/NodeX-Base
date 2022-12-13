import { Request, Response } from "express";
import studModel from "../model/model";

const getStudents = async (req: Request, res: Response): Promise<Response> => {
  try {
    const get = await studModel.find();
    return res.status(200).json({
      message: "Success",
      data: get,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const newStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, classes } = req.body;
    const get = await studModel.find();
    const post = await studModel.create({
      name,
      admissionNo: 222 + get.length,
      session: "2022/2023",
      classes,
    });

    return res.status(201).json({
      message: "Created",
      data: post,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Eror Occoured",
      data: error,
    });
  }
};

export { getStudents, newStudent };
