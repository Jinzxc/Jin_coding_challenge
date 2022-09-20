const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  if (req.body === null) {
    res.status(400).send('Bad request');
    return;
  }

  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update/:id", async (req, res) => {
  if (req.body === null) {
    res.status(400).send('Bad request');
    return;
  }

  Task.findByIdAndUpdate(req.params.id, req.body, 
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else
      if (!data) {
        res.status(404).send("Task not found");
      } else {
        res.status(200).send('Updated task \n' + data);
      }
    }
  );
});

router.delete("/delete/:id", async (req, res) => {
  if (req.body === null) {
    res.status(400).send('Bad request');
    return;
  }

  Task.findByIdAndRemove(req.params.id, 
    (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else 
      if (!data) {
        res.status(404).send("Task not found");
      } else {
        res.status(200).send('Deleted task');
      }
    }
  );
});

// Delete (almost) all entries
router.delete("/delete/", async (req, res) => {
  let task;
  try {
    task = await Task.deleteMany({})
    res.status(200).send("All task removed");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
