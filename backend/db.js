const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      "mongodb://localhost/taskdb", // currently in testing, might try Atlas later
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
