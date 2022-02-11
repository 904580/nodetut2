const dbConnect = require('./mongodb.js');

const update =async ()=>{
    let db = await dbConnect();
    let result = await db.updateOne({product:"realme"},{$set:{price:4500077}});
    console.log(result)
    if(result.acknowledged){
        console.log("updated record")
    }
}

update();