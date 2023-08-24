const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./model/datas')

//middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect to a database
const db_url = 'mongodb://localhost:27017/datas'
mongoose.connect(db_url).then(() => {
    console.log('Connection Established');
})

//SignIn Page in FrontEnd
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            if(req.body.password === userData.password){ //frontend === backend 
                res.send({message:'Login Successfully', status:200})
            }else{
                res.send({message:'Please enter your valid password'})
            }
        }else{
            res.send({message:'User not found'})
        }
    })
})

//SignUp Page in FrontEnd
app.post('/register', async(req, res) => {
    User.findOne({ email: req.body.email }).then((userData) => {
        if (userData) {
            //error message
            res.send({ message: 'User already exists' })
        } else {
            //add the data
            let userData = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })
            userData.save().then(() => {
                res.send({ message: 'user registered successfully' })
            }).catch(() => {
                res.send({ message: 'user registration failed. Try after sometime' })
            })
        }
    })
})

app.listen(4000,()=>{
    console.log('Server Running at the port 4000');
})
