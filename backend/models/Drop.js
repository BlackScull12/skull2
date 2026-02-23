import mongoose from "mongoose";

const DropSchema = new mongoose.Schema({
  date: Date
});

export default mongoose.model("Drop", DropSchema);
