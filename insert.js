const dbConnect = require('./mongodb.js');

const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insertMany ([
        {product:"Max1",price: 6783, Specification:"8gb RAM and ROM"},
        {product:"Max2",price: 6586, Specification:"2gb RAM and ROM"},
        {product:"Max3",price: 6987, Specification:"80gb RAM and ROM"},
        {product:"Max4",price: 6098, Specification:"81gb RAM and ROM"},
        
    ])
    if(result.acknowledged){
        console.log("record inserted");
    }
}

   

insert();