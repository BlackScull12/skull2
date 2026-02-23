import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({ active: true });
  res.json(products);
});

router.post("/", auth, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

router.patch("/:id", auth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

export default router;
