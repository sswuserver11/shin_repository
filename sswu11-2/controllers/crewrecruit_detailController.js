const db = require("../models/index");
crewrecruit_detail = db.crewrecruit_detail;
crew_info = db.crew_info;

exports.showCrew_write=(req,res)=>{
    res.render("crew_write");
};


exports.postedCrew_write=async(req,res)=>{
    try{
        await crewrecruit_detail.create({
            recruit_numb:3,
            identify_numb_manager:97867,
            title:req.body.title,
            detail_info:req.body.detail_info,
            recruit_end:req.body.recruit_end
        });
        console.log("데이터 추가 완료");
        res.render("crew_detail"); //동아리 등록 버튼을 클릭하여 저장 후 뜨는 사이트: views 폴
//더 안에 있
//는 ejs 파일이어야만 연동된다.
    }catch(err){
        res.status(500).send({
            message:err.message
        });
    }
};