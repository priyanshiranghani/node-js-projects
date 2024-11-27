const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    blogname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
   
})

const user = mongoose.model("user", userSchema);
module.exports = user;