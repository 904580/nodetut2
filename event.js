const express = require("express");
const EventEmitter = require("events");
const { Console } = require("console");
const app = express()
const event = new EventEmitter();

let count =0


event.on("count API",()=>{
    count++;
    console.log("event called")

})

app.get("/",(req,res)=>{
    res.send("api called")
    event.emit("count API");

});
app.get("/search",(req,res)=>{
    res.send(" search api called")

});
app.get("/update",(req,res)=>{
    res.send("update api called")

});

app.listen(6000);

