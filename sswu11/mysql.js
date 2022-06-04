require('dotenv').config();
const mysql = require('mysql2/promise');

let test = async () => {
        const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        waitForConnections: true,
        insecureAuth: true
    });

        let sql = 'SELECT * FROM crewrecruit_detail';
        let [rows, fields] = await db.query(sql);
        console.log(rows);
};
test();