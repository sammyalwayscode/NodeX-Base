import { Request, Response } from "express";
import storeModel from "../model/model";

const allStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const store = await storeModel.find();
    return res.status(201).json({
      message: "Data Gotten",
      data: store,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const oneStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const store = await storeModel.findById(req.params.id);
    return res.status(201).json({
      message: "Data Gotten",
      data: store,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const createStore = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, address, snacks, softDrinks } = req.body;
    let space = name.replaceAll(" ", "").toLowerCase();
    const newStore = await storeModel.create({
      name,
      address,
      snacks,
      softDrinks,
      tagNo: `${space}${Math.floor(Math.random() * 100)}`,
    });
    return res.status(201).json({
      message: "New Store Sucessfully Added to the Database",
      data: newStore,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

export { createStore, oneStore, allStore };
