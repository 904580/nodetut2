const express = require('express');
require('./config.js');
const shop = require('./shop.js');


const app = express();
app.use(express.json());

app.post("/create", async(req,res)=>{

    let data= new shop(req.body);
     console.log(req.body)
     let result = await data.save();
     console.log(result)
    res.send(result);
});

app.listen(4500);