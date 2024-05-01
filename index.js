const express = require("express");
require('dotenv').config()

const app = express();
const port = process.env.PORT

// cors 
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

app.get('/', (res, req, next) => {
    req.send("hello world");
}) 

app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`)
})
