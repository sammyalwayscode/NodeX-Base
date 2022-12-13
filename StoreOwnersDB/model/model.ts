import mongoose from "mongoose";

interface store {
  name: string;
  address: string;
  tagNo: string;
  snacks: {};
  softDrinks: {};
}

interface iStore extends store, mongoose.Document {}

const storeSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    tagNo: String,
    snacks: Object,
    softDrinks: Object,
  },
  { timestamps: true }
);

const storeModel = mongoose.model<iStore>("myStore", storeSchema);
export default storeModel;
