const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

// PUT, DELETE are works in progress
/* TODOS: 
    - implement argument checks
    - add status codes
    ~ add option to delete by name
    ~ add option to search by name
    ~ create patch route
*/ 

router.put("/update/:id", async (req, res) => {
  let task;
  try {
    task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.send("task updated");
  } catch (error) {
    res.send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  let task;
  try {
    task = await Task.findByIdAndRemove(req.params.id);
    res.send("task removed");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
