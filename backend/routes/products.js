import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (_, res) => {
  res.json(await Product.find({ active: true }));
});

router.get("/all", auth, async (_, res) => {
  res.json(await Product.find());
});

router.post("/", auth, async (req, res) => {
  res.json(await Product.create(req.body));
});

router.patch("/:id", auth, async (req, res) => {
  res.json(
    await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
});

router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
