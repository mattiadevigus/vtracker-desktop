const path = require("path");

exports.index = (req, res) => {
    res.send({ authenticated: false });
}

exports.test = (req, res) => {
    res.send("test");
}

exports.all = (req, res) => {
    res.sendFile(path.join(__dirname, "../../../build", "index.html"));
}