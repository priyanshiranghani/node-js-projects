const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://ranghanipriyanshi401:priyanshi1234@cluster0.piasx.mongodb.net/login-with-blog-project");


const database=mongoose.connection

database.on('connected',(err)=>{
    if (err) {
        console.log(err);   
    }
    console.log('db is connected');
})
  
module.exports=database