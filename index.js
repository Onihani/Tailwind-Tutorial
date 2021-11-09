const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.static(__dirname));

server.use("/login", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

server.use("/", (req, res, next) => {
  res.sendFile("./index.html", { root: __dirname });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
