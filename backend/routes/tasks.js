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

/* TODOS: 
    - implement argument checks
    - add status codes
    ~ unlikely to add "get by name", requires unnecessary task checks
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

// Delete (almost) all entries
router.delete("/delete/", async (req, res) => {
  let task;
  try {
    task = await Task.deleteMany({})
    res.send("all task removed");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
