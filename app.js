const express = require('express');
require("express-group-routes");
const path = require('path');
const dotenv = require("dotenv");
const { loadDatabase } = require('./app/middleware/LoadDatabase');
const app = express();


// router
var indexRouter = require('./routes/index');
// api router
var apiRouter = require('./routes/api/dev')

// Middleware untuk parsing body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware untuk serving static files (CSS, JavaScript, dll.)
app.use(express.static(path.join(__dirname, 'public')));

// set view 
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "ejs");

// database
app.use(loadDatabase);

// Rute untuk halaman utama
app.use("/", indexRouter);
app.group("/api/dev", (router) => {
    router.use(apiRouter);
});

module.exports = app;