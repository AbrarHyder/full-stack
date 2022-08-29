const express = require('express');
const {conectDb} = require('./db/index');


const app = express();

connectDb.then() => {
    app.listen(process.env.PORT, () => {
        console.log('port' $(process.env.PORT))
    })
}
