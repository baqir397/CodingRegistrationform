const express = require('express');
const path = require("path");
const fs = require("fs")
const app= express();
const port= 80;

//Express
app.use("/static",express.static('static'));
app.use(express.urlencoded());

//PUG
app.set('view engine', 'pug')
app.set('express', path.join(__dirname),'express')

//Endpoint
app.get("/",(req,res) =>{
    const con="hurry up!"
    const params={'tittle':"Registration form for scholarship Test",content:con}
    res.status(200).render('index.pug',params)
})
app.post("/",(req,res)=>{
    Name=req.body.NAME
    FName=req.body.FNAME
    Gender=req.body.GENDER
    DOB=req.body.DOB
    Marks=req.body.MARKS
    Qualification=req.body.QUALIFICATION
    Place=req.body.PLACE
    Pnumber=req.body.NUMBER
    Email=req.body.EMAIL
    Planguage=req.body.LANGUAGE
    let Details= 
   `Name: ${Name}, 
    Father's Name: ${FName}, 
    Gender : ${Gender}, 
    DateOfBirth : ${DOB}, 
    Marks : ${Marks}, 
    Studing : ${Qualification}, 
    Live : ${Place}, 
    Phone Number : ${Pnumber}, 
    Email : ${Email}, 
    Programming Language : ${Planguage}`
    fs.writeFileSync('Details.txt',Details)
    const params={'message':"You has been Registered successfully"}
    res.status(200).render('index.pug',params)
})
//Server starter
app.listen(port,()=>{
    console.log(`the webpage is successfully access on port ${port}`)
});
