const Discord = require('discord.js');
const mysql  =require('mysql');

module.exports.run = async(client, message, args) => {

    const membre = message.author.username;
    const membre_id = message.author.id;

    const db = mysql.createConnection({

        host: process.env.host,
        
        user: process.env.user,
    
        password: process.env.pass,

        database: process.env.database
     
      });
      // en cas de déconnexion
      db.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            db.connect();
        } else {
            throw err;
        }
    });
      db.connect(function(err) {

        if (err) throw err;
     
        console.log(`Demande de vérification du compte de ${membre}`);
     
      });
      db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function (err, result) {

        if (err) throw err;
        db.commit();
        let moneyEmbed = new Discord.MessageEmbed()
          .setDescription("💰 Votre argent")
          .setColor("#90ee90")
          .addFields(
            {name: 'Argent', value: `${result[0].gold}`}
          );
        message.channel.send(moneyEmbed);
      });
      
};

module.exports.help = {
    name: "money"
}
