const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ranghanipriyanshi401:priyanshi1234@cluster0.piasx.mongodb.net/exam");

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`DB connected`);
})

module.exports = db;
