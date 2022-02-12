const express = require('express');
const app = express();
const dbConnect = require('./mongodb.js');



app.use(express.json());


app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    res.send(result)
})

app.listen(4500)