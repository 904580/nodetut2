const express = require('express');
const app = express();

const path = require ('path');
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.listen(5000);


//how to remove extention from URL like about.html

// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/contact',(req,res)=>{
//     res.sendFile(`${publicPath}/contact.html`)

// })

// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })


//template engine

app.set('view engine', 'ejs');


app.get('/profile',(req,res)=>{
    const user={
        name:'anoop saini',
        email:'anoopsaini421@gmail.com',
        city:'delhi'
    }
    res.render('profile',{user});
});