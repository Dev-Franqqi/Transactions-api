"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require("dotenv").config();
const route_1 = __importDefault(require("./routes/route"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route_1.default);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("database connected successfully");
    app.listen('5000', () => {
        console.log("App is listening on port 5000");
    });
})
    .catch((error) => {
    console.log(error);
});
