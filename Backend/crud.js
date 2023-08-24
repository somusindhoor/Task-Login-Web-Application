//Adding the tasks, Get all the tasks, Get by particular tasks_id, Delete by Tasks and Update the tasks in POSTMAN.
//Read with the help of Postman and Browser


const express = require('express')
const app = express()

app.use(express.json())

let tasks = [
    {
        Name: "react",
        taskStatus:"completed",
        id:1
    },
    {
        Name: "Node",
        taskStatus:"completed",
        id:2
    },
    {
        Name: "Express",
        taskStatus:"completed",
        id:3
    },
    {
        Name: "MongoDB",
        taskStatus:"not-completed",
        id:4
    }
]

app.get('/',(req,res)=>{
    res.send('Home Page');
})

//to get all the tasks
app.get('/tasks',(req,res)=>{
    res.send(tasks);
})

//to get individual tasks
app.get('/tasks/:id',(req,res)=>{
    //console.log(req.params.id); // to fetch the route parameter
    const tasks_id = req.params.id

    const data = tasks.find(x => x.id === parseInt(tasks_id))
    if(data){
        res.send(data);
    }else{
        res.send('tasks not found');
    }
})

//to add a new tasks
app.post('/tasks',(req,res)=>{
    const data = {
        Name : req.body.Name,
        taskStatus : req.body.taskStatus,
        id : tasks.length+1
    }
    tasks.push(data)
    res.send(data)
})

//to update a courses based on id
app.put('/tasks/:id',(req,res)=>{
    const tasks_id = req.params.id

    const data = tasks.find(x => x.id === parseInt(tasks_id))
    if(data){
       data.Name =  req.body.Name
       res.send(data)
    }else{
        res.send('tasks not found');
    }
})

//to delete the tasks based on id
app.delete('/tasks/:id',(req,res)=>{
    const tasks_id = req.params.id

    const data = tasks.find(x => x.id === parseInt(tasks_id))
    if(data){
    //    let tasks = tasks.indexOf(data)
    //    tasks.splice(tasks_index,1) 
    //      res.send(tasks) //(OR)

    tasks = tasks.filter(x=> x.id !== parseInt(tasks_id))
    res.send(data)
    }else{
        res.send('Already Deleted OR Course not found')
    }
})


app.listen(4000,()=>{
    console.log('Server Started');
})