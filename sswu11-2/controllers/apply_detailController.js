const db = require("../models/index");
crew_info = db.crew_info;
application_basic = db.application_basic;

exports.showApply_detail = async (req, res) => {
        try {
                question_data = await crew_info.findOne({
                        where: { identify_numb_manager : "97867" }
                });

                answer_data = await application_basic.findOne({
                        where: {identify_numb_manager : "97867" }
                });

                res.locals.question_data = question_data;
                res.locals.answer_data = answer_data;

                res.render("apply_detail", {
                        crew_info: question_data,
                        application_basic : answer_data

                });
        }catch(err) {
                res.status(500).send({
                        message: err.message
                });
        }
};