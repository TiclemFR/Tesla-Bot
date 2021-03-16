const Discord = require('discord.js');
const mysql  = require('mysql');
const db = require('../modules/connect.js');

module.exports.run = async(client, message, args) => {

    const membre = message.author.username;
    const membre_id = message.author.id;
      db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function (err, result) {

        if (err) throw err;
        
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
