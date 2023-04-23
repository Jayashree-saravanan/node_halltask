// import express from "express";
// import * as fs from 'fs';
const express = require("express")
const fs = require("fs")
const path = require("path")


//path
const dirPath = path.join(__dirname, "timestamps");
console.log("dirpath", dirPath)

const data = [
    {
        id: "1",
        numberOfSeats: 100,
        amenities: ["AC", "chairs", "discolights"],
        price: 5000,
        ifBooked: "true",
        customerName: "krish",
        date: "05-jan-2023",
        startTime: "10-feb-2022 at 12PM",
        endTime: "11-feb-2020 at 11am",
        RoomId: 201,
        RoomName: "Duplex"
    },
    {
        id: "2",
        numberOfSeats: 100,
        amenities: ["AC", "chairs", "discolights"],
        price: 5000,
        ifBooked: "true",
        customerName: "sara",
        date: "05-jan-2023",
        startTime: "10-feb-2022 at 12PM",
        endTime: "11-feb-2020 at 11am",
        RoomId: 202,
        RoomName: "Duplex"
    },
    {
        id: "3",
        numberOfSeats: 100,
        amenities: ["AC", "chairs", "discolights"],
        price: 5000,
        ifBooked: "true",
        customerName: "sark",
        date: "05-jan-2023",
        startTime: "10-feb-2022 at 12PM",
        endTime: "11-feb-2020 at 11am",
        RoomId: 202,
        RoomName: "Duplex"
    },

]


//initializing express server
const app = express()
//to read json for post request
app.use(express.json())

//middleware
app.use(express.static("timestamps"))

//api's
app.get("/", (req, res) => {
    res.send("hey there im working good")
})


// Get method 
app.get("/static", (req, res) => {
    let time = new Date();
    let dateString = time.toUTCString().slice(0, -4);
    console.log(dateString);
    let timeStamp = `Last updated timestamp is : ${dateString}`

    fs.writeFileSync(`${dirPath}/date-time.txt`, timeStamp, (err) => {
        console.log('file created successfully')

    })

    res.sendFile(path.join(__dirname, "timestamps/date-time.txt"));

})

app.get("/hall/details?", (req, res) => {
    if (req.query) {
        console.log(req.query)
        const { ifBooked } = req.query;
        console.log(ifBooked)
        let filteredHall = data;
        if (ifBooked) {
            filteredHall = filteredHall.filter((halls) => halls.ifBooked === ifBooked)
        }
        res.send(filteredHall)
    } else {
        res.send(data)
    }
})

app.get("/hall/details/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)
    const specificHall = data.find(hall => hall.id === id);
    res.send(specificHall)

})


//Post method : book new hall
app.post("/hall/details/", (req, res) => {
    const newHall = {
        id: data.length + 1,
        numberOfSeats: req.body.numberOfSeats,
        amenities: req.body.amenities,
        price: req.body.price,
        ifBooked: req.body.ifBooked,
        RoomId: req.body.RoomId,
        customerName: req.body.customerName,
        date: req.body.data,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        RoomName: req.body.RoomName

    }
    console.log(req.body)
    data.push(newHall);
    res.send(data)
})

//Put method to update the hall-If the record exists then update else create a new record
app.put("/hall/details/:id", (req, res) => {
    const { id } = req.params;
    const halls = data.find(hall => hall.id === id); //to get specific data
    console.log(halls)

    //for non booking room
    // if (halls.ifBooked === 'true') {
    //     return res.status(400).send("hey the hall is already booked") //400 bad request
    // }
    halls.date = req.body.date;
    halls.startTime = req.body.startTime;
    halls.endTime = req.body.endTime;
    halls.customerName = req.body.customerName;
    halls.ifBooked = "true"

    return res.status(200).send(data)
})

//set server to listen under port 8002
app.listen(8002, () => console.log(`server started in local host:8002`)) //port run once 