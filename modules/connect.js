const mysql = require('mysql');

    const db = mysql.createPool({

    connectionLimit: 2,

    /* host: process.env.host,

    user: process.env.user,

    password: process.env.pass,

    database: process.env.database */

    host: "node1.delya.eu",

    user: "Ticlem_bdd",

    password: "wo37oq88",

    database: "Ticlem_bdd"
});

    db.on('error', err => {
        console.log(err, err.code);
    });
function dbConnect(){
    db.getConnection();
}
module.exports = db, dbConnect;