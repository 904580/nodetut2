const mongoose = require('mongoose');

const main = async()=>{// SCHEMA
    await mongoose.connect("mongodb://localhost:27017/shop");
    const mobileSchema = new mongoose.Schema({
        name:String,
        price:Number
    });

    const mobileModel = mongoose.model('mobile',mobileSchema);//MODEL
    let data = new mobileModel({name:"OPPO", price:242});
    let result = await data.save();
    console.log(result);


}
main()

