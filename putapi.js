const express = require('express');
const app = express();
const dbConnect = require('./mongodb.js');



app.use(express.json());

//static data  update-------------------------

// app.put('/', async (req, res) => {
//     let data = await dbConnect();
//     let result =  data.updateOne({product:"micromax"},{$set:{price:11111}})
//     res.send({result:"updated"})
// })

// app.listen(4500)



//dynamic data update through postman-----------------------------

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result =  data.updateOne({product:req.body.product},{$set:req.body})
    res.send({result:"updated"})
})

app.listen(4500)