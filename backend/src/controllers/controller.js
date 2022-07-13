const Axios = require("axios");
const path = require("path");

exports.index = (req, res) => {
    res.send({ authenticated: false });
}

exports.authenticate = (req, res) => {
    Axios.post("http://93.38.56.135:9000/login", (req.body));

    /* res.send(({ authenticated: false })) */
}

exports.test = (req, res) => {
    res.send("test");
}

exports.all = (req, res) => {
    res.sendFile(path.join(__dirname, "../../../build", "index.html"));
}