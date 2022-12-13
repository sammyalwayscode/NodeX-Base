import carModel from "../model/carModel";
import { Request, Response } from "express";

const postCar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { manufacturer, model, color, selfDriving, transmission } = req.body;
    const newCar = await carModel.create({
      manufacturer,
      model,
      color,
      chasisNo: Math.floor(Math.random() * 100000000),
      selfDriving,
      transmission,
    });

    return res.status(201).json({
      message: "Data Created Sucessfully",
      data: newCar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const getCar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getData = await carModel.find();
    return res.status(200).json({
      message: "Data Gotten",
      data: getData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const getOneCar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOne = await carModel.findById(req.params.id);
    return res.status(200).json({
      message: "Data Gotten",
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

export { postCar, getCar, getOneCar };
