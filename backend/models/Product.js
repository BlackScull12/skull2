import mongoose from "mongoose";

export default mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    active: { type: Boolean, default: true }
  })
);
