module.exports = (sequelize, Sequelize) => {
        const crew_info = sequelize.define("crew_info"),
         Crewrecruit_detail = sequelize.define("crewrecruit_detail", {
                recruit_numb: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                },

                title: {
                        type: Sequelize.STRING
                },


                detail_info: {
                        type: Sequelize.TEXT
                },

                recruit_end: {
                        type: Sequelize.DATE
                },

//              identify_numb_manager: {
//                      type: Sequelize.INTEGER,
//                      references: {
//                              model: crew_info,
//                              key: 'identify_numb_manager'
//                     }
//              }
        },
                {
                         sequelize,
                         modelName:'crewrecruit_detail', //DB 속 테이블명과 동일할 것
                         freezeTableName:true, //DB에 테이블을 생성할 때, 위 modelName 뒤에 s>를 붙여 테이블 생성하는 것을 방지
                         timestamps: false
                });

        return Crewrecruit_detail;
}