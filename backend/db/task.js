const mongoose = require('mongoose');

const task = new mongoose({
    taskname:String,
    status:String,
    tag:String,
})

mondule.exports = {task}