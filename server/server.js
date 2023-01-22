const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = 8080
app.use(cors())
app.use(bodyParser.json())
const { Schema } = mongoose;
let featuredSchema = new Schema({
    title: { type: String, required: true},
    name: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: String, required: true},
    imgUrl: { type: String, required: true},
})
const Featured = mongoose.model("course", featuredSchema)
app.get("/course", (req, res) => {
    Featured.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Users not found"})
        }
    })
})
app.get("/course/:id", (req, res) => {
    const { id } = req.params
    Featured.findById( id, (err, docs) =>{
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Users not found"})
        }
    })
})

app.delete("/course/:id", (req, res) => {
    const { id } = req.params
    Featured.findByIdAndDelete( id, (err) => {
        if(!err){
            res.send("Deleted")
        } else{
            res.status(404).json({ message: err})
        }
    })
})
app.post("/course", (req, res) => {
    let newCourse = new Featured({
        title: req.body.title,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl
    })
    newCourse.save()
    res.send({ message: "Post Course"})
})
let ExpertsSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    imgUrl: { type: String, required: true},
})
const Experts = mongoose.model("expert", ExpertsSchema)
app.get("/expert", (req, res) => {
    Experts.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Users not found"})
        }
    })
})
app.get("/expert/:id", (req, res) => {
    const { id } = req.params
    Experts.findById( id, (err, docs) =>{
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Users not found"})
        }
    })
})
mongoose.set("strictQuery", false);
mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/Courses",
    err => {
        if(!err){
            console.log("DB connect")
            app.listen(port, () => {
                console.log(`http://localhost:${port}`);
            })
        }
    }
)