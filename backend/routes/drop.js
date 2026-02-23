import express from "express";
import Drop from "../models/Drop.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (_, res) => {
  res.json(await Drop.findOne());
});

router.post("/", auth, async (req, res) => {
  await Drop.deleteMany();
  res.json(await Drop.create({ date: req.body.date }));
});

export default router;
