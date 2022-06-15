const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  crewrecruit_detailController = require("./controllers/crewrecruit_detailController"),
  crew_detailController = require("./controllers/crew_detailController"),
  apply_detailController = require("./controllers/apply_detailController")
  layouts = require("express-ejs-layouts"),
  db = require("./models/index"),
        Sequelize = db.Sequelize;
  
const router = require('express').Router();

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 80);
router.use(
  express.urlencoded({
    extended: false
  })
);
router.use(express.json());
router.use(layouts);
router.use(express.static("public"));

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/crew_detail", crew_detailController.showCrew_detail);
router.get("/apply_detail", apply_detailController.showApply_detail);
router.get("/crew_write", crewrecruit_detailController.showCrew_write);
router.post("/crew_write", crewrecruit_detailController.postedCrew_write);

router.use(errorController.pageNotFoundError);
router.use(errorController.internalServerError);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

module.exports = router;