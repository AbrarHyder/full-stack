const {Task} = require('../Database/notes');

const jsonwebtoken = require('jsonwebtoken');

const create = async (req,res) => {
    try {
        let {token} = req.Task;
        res.status(200).send(Task)
    }
    catch (error) {

     res.status(500).send({message: error.message})
    }
}

const del = async (req,res) => {
    try {
        let {name} = req.Task;
        res.status(200).send({message: "delete"})
    }
    catch (error) {

     res.status(500).send({message: error.message})
    }
}


const update = async (req,res) => {
    try {
        let {token} = req.Task;
        res.status(200).send(update)
    }
    catch (error) {

     res.status(500).send({message: error.message})
    }
}

module.exports = {
    create,
    del,
    update
}