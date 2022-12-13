import mongoose from "mongoose";

interface stud {
  name: string;
  admissionNo: number;
  session: string;
  classes: string;
}

interface iStud extends stud, mongoose.Document {}

const studentSchema = new mongoose.Schema(
  {
    name: String,
    admissionNo: Number,
    session: String,
    classes: String,
  },
  { timestamps: true }
);

export default mongoose.model<iStud>("allStud", studentSchema);
