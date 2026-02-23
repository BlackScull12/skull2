import express from "express";
import Drop from "../models/Drop.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const drop = await Drop.findOne();
  res.json(drop);
});

router.post("/", auth, async (req, res) => {
  await Drop.deleteMany();
  const drop = await Drop.create({ date: req.body.date });
  res.json(drop);
});

export default router;
