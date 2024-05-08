const express = require('express');
const path = require('path');

const app = express();

// router
var indexRouter = require('./routes/index');

// Middleware untuk parsing body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware untuk serving static files (CSS, JavaScript, dll.)
app.use(express.static(path.join(__dirname, 'public')));

// set view 
app.set("views", path.join(__dirname, "./app/views"));
app.set("view engine", "ejs");

// Rute untuk halaman utama
app.use("/", indexRouter);

module.exports = app;