import * as fs from 'fs';
// const fs= require("fs") //file accessing package
// const os = require("os")// os
import * as os from 'os'

console.log("hello")

//command line arguments

console.log( "command line arguments", process.argv)

//accessing command line arguments

// const [, , n1, n2]= process.argv 
// const sum =(num1,num2)=>{
//     return +num1 + +num2
// }

// console.log('thd addition of number is' , sum(n1,n2))

//console.log(hey "name" welcome to nodejs)
 //files accessing
 //read a file

 fs.readFile('./sample1.txt', "utf-8", (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file read successfully')
        console.log(data)
    }
 })

// write file

 const content = "hey im the new file from nodejs"
 fs.writeFile("./newfile.txt", content,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file witten successfully')
    }
 })

 //updation of file

 const newContent = "\n new content added to the file"
 fs.appendFile("./newfile.txt", newContent,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('update successfully')
    }
})

    //delete file

    // const newContent = "new content added to the file"
//     fs.unlink("./newfile.txt",   (err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('deleted successfully')
//         }

//  })

//  fs.readdir("./newFolder",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }

//  })

 //os level access

 console.log('os version-----', os.version());
//  console.log("free memory----",os.freemem());
//  console.log("total memory---", os.totalmem());


 //date and time

//  let time = Date.now();
 console.log("timestamp---", Date.now() );


//  let date = new Date();
//  let utc = date.toUTCString();
//  console.log("utc----", utc)
//  let today = date.getDate();
//  console.log("date---:", today);
//  let month= date.getMonth();
//  console.log("month---:", month);
//  let year= date.getFullYear();
//  console.log("year---:", year);



