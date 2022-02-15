import fs from "fs";

fs.readFile('./sample.txt', 'utf-8',(err,data)=>{//---- perform the async operation and pass the callback function
if(err){
    return error
}
console.log(data);

})
console.log("hi this is himanshu");


//-------------------------------------- readfilesync we cant pass the callback function--


import fs from "fs";

const a = fs.readFileSync('./sample.txt', 'utf-8')//---- perform the sync operation
console.log(a);
console.log("hi this is himanshu");