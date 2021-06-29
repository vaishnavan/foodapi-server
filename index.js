const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8000;
const mongoURI = "mongodb+srv://foodblog:Test@123@cluster0.pgpgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.use(cors());
app.use(express.json());

//routes
app.use('/food/api', require("./controller/foodRoute"));

//server connection
app.listen((port), () => {
    console.log(`server up and running on ${port}`)
})

//DB connection
mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, 
(err) => {
    if(!err){
        console.log("Database connected successfully")
    }
    else{
        console.log(err)
    }
}
)