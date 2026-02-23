import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  password: String
});

export default mongoose.model("Admin", AdminSchema);
