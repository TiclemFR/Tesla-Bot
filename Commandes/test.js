const Discord = require('discord.js');
const mysql  =require('mysql');

module.exports.run = async(client, message, args) => {

    const membre = message.author;
    const membre_id = membre.id;

    const db = mysql.createConnection({

        host: process.env.host,
     
        user: process.env.user,
     
        password: process.env.pass,
        
        database: process.env.database
     
      });
      db.connect(function(err) {

        if (err) throw err;
     
        console.log("Connecté à la base de données MySQL!");
     
      });

      db.query(`INSERT INTO user_discord (name, id_discord) VALUE ('${membre}', '${membre_id}')`, function (err, result) {

        if (err) throw err;

        console.log(result);
        db.destroy();
 
      });
};

module.exports.help = {
    name: "test"
}
