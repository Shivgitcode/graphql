const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/college")
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log(err.message));
};

module.exports = dbConnect;
