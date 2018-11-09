var express = require("express");
var cors = require('cors');

var app = express();
app.use(cors({ origin: '*' }));
app.get("/api/users", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Betty", "Leo"]);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});