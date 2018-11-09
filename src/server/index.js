var express = require("express");
var app = express();
app.get("/api/users", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Betty", "Leo"]);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});