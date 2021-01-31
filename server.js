const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("src"));

app.use("/", (req, res, next) => {
  res.sendFile(path.resolve("src", "index.html"));
});

app.listen(port, () => {
  console.log("Server listening at port " + port);
});
