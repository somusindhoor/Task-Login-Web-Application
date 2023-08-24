let mongoose = require('mongoose')

//(2)Creating a Schema
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//(3)Creating a model
module.exports = mongoose.model('Data',userSchema)