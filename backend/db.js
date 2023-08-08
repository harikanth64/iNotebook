const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/";


const connectToMongo = async ()=>{
    try {
        mongoose.set('strictQuery', false)

        // no longer accepts a callback at Mongoose.connect
        mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Successfully")
    
} catch(error) {
    console.log(error)
}
}

module.exports = connectToMongo;