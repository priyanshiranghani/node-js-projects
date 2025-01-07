const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ranghanipriyanshi401:aneK0fKqv1DTIBev@crudwithmvc.neh0a.mongodb.net/?retryWrites=true&w=majority&appName=Crudwithmvc");

const database = mongoose.connection;
database.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    };
    console.log(`db is connected`);  
})

module.exports = database