require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workout')
//express app
const app=express()
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB is connected'))
.catch(err => console.log(err)); 
//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('listening on port 4000 ');
})