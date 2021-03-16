const mysql = require('mysql');

    const db = mysql.createPool({

    connectionLimit: 2,

    host: process.env.host,

    user: process.env.user,

    password: process.env.pass,

    database: process.env.database
});

    // en cas de déconnexion
    db.on('error', err => {
        console.log(err, err.code);
    });
module.exports = db;