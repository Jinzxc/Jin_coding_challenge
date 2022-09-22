const mongoose = require("mongoose");

const LOCAL_URL = "mongodb://localhost/taskDB"
const CLOUD_URL = "mongodb+srv://Testing:[Password]@h4itest.dbcauap.mongodb.net/taskDB"

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      LOCAL_URL,
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
