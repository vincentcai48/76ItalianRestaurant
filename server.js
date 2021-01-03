const express = require('express');
const path = require('path')
const app = express();
const router = require('./router')
/*For react apps
if (process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,"client")))
}*/

app.use(express.static(path.join(__dirname,'client')))
app.use('/api',router)
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'client',"about.html"))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'client',"contact.html"))
})
app.get('/menu',(req,res)=>{
    res.sendFile(path.join(__dirname,'client',"menu.html"))
})


const port = process.env.PORT || 5000

app.listen(port,()=>{console.log('Server Running on Port 5000')})

