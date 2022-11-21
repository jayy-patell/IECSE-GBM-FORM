const mongoose = require('mongoose');
const mongoURI= "mongodb+srv://jay_admin:hailiecse@cluster0.yslfbfg.mongodb.net/iecse";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;