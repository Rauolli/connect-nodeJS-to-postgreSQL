require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

const PORT = process.env.PORT || 8080;

// parse body of any reqeust comming from HTML forms
app.use(express.urlencoded({ extended: true}));
// parse the body of any request NOT comming from an HTML form
app.use(express.json());
// allow CORS-requests from any Cross-origin
app.use(cors());


// The USERS ***************************************************
// GET  /  : To get all the users 
app.get("/", (req, res)=>{

});

// GET  /:id :  To get one user (with the id) 
app.get("/:id", (req, res)=>{

});

//POST / -> To create a new user 
app.post("/", (req, res)=>{

});

// PUT /:id  :  To edit one user (with the id) 
app.put("/:id", (req, res)=>{

});

// DELETE  /:id : To delete one user (with the id)
app.delete("/:id", (req, res)=>{

});

// The ORDERS -----------------------------------------------------
// GET  /  : To get all the orders 
app.get("/", (req, res)=>{

});

// GET  /:id :  To get one order (with the id) 
app.get("/:id", (req, res)=>{

});

//POST / -> To create a new order 
app.post("/", (req, res)=>{

});

// PUT /:id  :  To edit one order (with the id) 
app.put("/:id", (req, res)=>{

});

// DELETE  /:id : To delete one order (with the id)
app.delete("/:id", (req, res)=>{

});