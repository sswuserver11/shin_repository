const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  crewrecruit_detailController = require("./controllers/crewrecruit_detailController"),
  layouts = require("express-ejs-layouts");

const router = require('express').Router();

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 80);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/crew_detail", homeController.showCrew_detail);
app.get("/apply_detail", homeController.showApply_detail);
app.get("/crew_write", crewrecruit_detailController.showCrew_write);
app.post("/crew_write", crewrecruit_detailController.postedCrew_write);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

module.exports = router;