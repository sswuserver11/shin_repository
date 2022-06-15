const db = require("../models/index");
crew_info = db.crew_info;
crewrecruit_detail = db.crewrecruit_detail;

exports.showCrew_detail = async (req, res) => {
        try {
                name_data = await crew_info.findOne({
                        where: { identify_numb_manager : "97867" }
                });


                title_data = await crewrecruit_detail.findOne({
                        where: { identify_numb_manager : "97867" }
                });


                date_data = await crewrecruit_detail.findOne({
                        where: { identify_numb_manager : "97867" }
                });


                info_data = await crewrecruit.findOne({
                        where: {identify_numb_manager : "97867" }
                });

                res.locals.name_data = name_data;
                res.locals.title_data = title_data;
                res.local.date_data = date_data;
                res.local.info_data = info_data;

                res.render("crew_detail", {
                        crew_info: name_data,
                        crewrecruit_detail : title_data,
                        crewrecruit_detail : date_data,
                        crewrecruit_detail : info_data

                });
        }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }

        res.render("crew_detail");
};