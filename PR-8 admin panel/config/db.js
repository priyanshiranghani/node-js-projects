const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ranghanipriyanshi401:priyanshi1234@cluster0.piasx.mongodb.net/admin-panel");

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`database is connected`);
    
})
module.exports = db;
