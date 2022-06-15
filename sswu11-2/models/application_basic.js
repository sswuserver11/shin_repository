module.exports = (sequelize, Sequelize) => {
        const application_basic = sequelize.define("application_basic", {
                supporter_numb: {
                        type: Sequelize.INTEGER,
                        autoIncrement: true,
                        primaryKey: true
                },
//              identify_numb_manager: {
//                      type: Sequelize.INTEGER,
//                      primaryKey: true
//              },
//              email: {
//                      type: Sequelize.STRING,
//                      allowNull: false
//              },
                application_ans1: {
                        type: Sequelize.STRING
                },
                application_ans2: {
                        type: Sequelize.STRING
                },
                application_ans3: {
                        type: Sequelize.STRING
                },
                application_ans4: {
                        type: Sequelize.STRING
                },

                application_ans5: {
                        type: Sequelize.STRING
                },

                pass_TF: {
                        type: Sequelize.STRING
                }
        },
                {
                sequelize,
                modelName:'application_basic', //DB 속 테이블명과 동일할 것
                freezeTableName:true, //DB에 테이블을 생성할 때, 위 modelName 뒤에 s를 붙여 테
이블 생성하는 것>을 방지
                timestamps:false //createdAt, updateAt 속성이 생성됨을 방지
                });
        return application_basic;

}
