const mongoose = require('mongoose')
const express = require('express')
const app = express();
require("dotenv").config();
import route from "./routes/route";



app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use("/api",route)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("database connected successfully")
        app.listen('5000', () => {
            console.log("App is listening on port 5000")
        })
    })
    .catch((error: unknown) => {
    console.log(error)
})