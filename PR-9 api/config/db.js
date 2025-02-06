const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://ranghanipriyanshi401:priyanshi1234@cluster0.piasx.mongodb.net/api"
    );
    console.log(`mongodb successfully connect`);
  } catch (err) {
    console.error(err);
    return false;
  }
};
module.exports = connectDB;



