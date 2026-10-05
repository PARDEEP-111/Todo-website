import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Task from "./model/api.js";

const app = express();
const port = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/data")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cors());
app.use(express.json());

app.get("/api/task", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/task", async (req, res) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.delete("/api/task/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/api/task/:id", async (req, res) => {
  try {
    const markcompleted = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },  
      { new: true }

    );
      if (!markcompleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(markcompleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});