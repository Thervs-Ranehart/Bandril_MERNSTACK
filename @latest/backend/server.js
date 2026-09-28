import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(error => {
        console.log(error)
    })

app.get("/api/message", (req, res)=>{
    res.json({
        message: "Hello from Express!"
    });
});

app.get("/api/students", async (req, res) => {
    const students = await Student.find();
    res.json(students)
})



app.listen(8080, ()=> {
    console.log("Server running on port 8080");
});

