import express from "express";
import {client} from "./db.js"

//intiliz express
const app = express();
const PORT= 8000;

//middleware
app.use(express.json())


function getData(collectionName){
    return client
    .db("guvi")
    .collection(collectionName)
    .find()
    .toArray()
}


app.get ("/company/data", async (req,res)=>{
const companyData= await getData("company");
return res.status(200).json({data:companyData})
})

app.get ("/cars/data",async(req,res)=>{
const carsData= await getData("cars");
return res.status(200).json({data:carsData})
})

app.get ("/users/data",async(req,res)=>{
    const usersData= await getData("users");
    return res.status(200).json({data:usersData})
    })

//set server to listen under port 8000
app.listen(PORT,()=>console.log(`server started in local host: ${PORT}`)) //port run once 