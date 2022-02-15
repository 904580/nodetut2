const express = require('express');
const app = express();
const dbConnect = require ('./mongodb.js');

app.use(express.json());//--- show daat in node js

//read api from postman----
app.get('/',async(req,res)=>{
    let db = await dbConnect();
    db = await db.find().toArray();
    console.log(db)
    res.send(db)

});




app.listen(4500)