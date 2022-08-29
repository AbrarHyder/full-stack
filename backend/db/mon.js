const mongoose = require('mongoose');
require('dotenv').config()

async function connectDb() {
    try{
        await mongoose.connect(process.env);
        console.log("database connected")
    }
    catch(error) {
        console.log(error)
        throw error;

    }
}
module.exports = {connectDb}