import mongoose from "mongoose";

interface car {
  manufacturer: string;
  model: number;
  color: string;
  chasisNo: number;
  selfDriving: boolean;
  transmission: boolean;
}

interface iCar extends car, mongoose.Document {}

const carSchema = new mongoose.Schema(
  {
    manufacturer: String,
    model: Number,
    color: String,
    chasisNo: Number,
    selfDriving: Boolean,
    transmission: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model<iCar>("userCars", carSchema);
