const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
   if(!req.query.age)
   {
       resp.send("please provide age")
   }
   else if(!req.query.age<18){
       resp.send("you can't access the website");
   }
    else{
        next(); 
    }
}

app.use(reqFilter)

app.get('/',(req,res)=>{//--routes
    res.send("home page");
})

app.get('/users',(req,res)=>{//routes
    res.send("users page");
})

app.listen(4500)