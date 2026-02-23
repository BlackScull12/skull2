import mongoose from "mongoose";

export default mongoose.model(
  "Drop",
  new mongoose.Schema({
    date: Date
  })
);
