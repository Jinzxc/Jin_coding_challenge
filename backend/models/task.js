const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Could improve Schema to hold other data (e.g. Date created, task name/description, task category, etc...)
const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("task", taskSchema);
