const path = require("path");
const express = require("express");
const cors = require("cors");
const vtRoutes = require("../routes/router");
require('dotenv').config({
    path: path.resolve('.env'),
});

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use(cors());
server.use("/", vtRoutes);

server.use(express.static(path.join(__dirname, "../build")));

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})