const express = require("express");
const app = express();
// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
const mongooseConnect = require("./configs/mongoDB.connect");

require("dotenv").config();

app.use(express.json());

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)

const bookRouter = require("./routes/books.routes");
app.use("/books", bookRouter)
const fileUpload = require('express-fileupload');

// Enable file uploads
app.use(fileUpload());



app.listen(8000, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("server running on port: ", 8000)
    mongooseConnect()
})