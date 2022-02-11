const dbConnect = require('./mongodb');

const deletedata = async ()=>{
    const db =  await dbConnect();
    let result = await db.deleteOne({product:"Max1"});
    console.log(result)
    if(result.acknowledged){
        console.log("deleted record")
    }

}

deletedata();