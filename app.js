const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();


app.set('view engine', 'ejs');

const items = ["Food", "Study", "Cook Food"];

const workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.GetDate();
  res.render("list", {
    listTitle: day,
    newlistitems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newitem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newlistitems: workItems
  });
});

app.post("/work", function(req, res) {
  var item = req.body.newitem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server started at port 3000");
});
