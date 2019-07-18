const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
  
  const membre = message.author;
  
  const EmbedProb = new Discord.RichEmbed()
  .set color('#e40a0a')
  .setTitle('Liste des problèmes de **Tesla Bot**')
  .addField('Musique', 'Pas de système de queue, doit être stop pour remettre une musique')
  .addField('addrole/delrole', 'Ne fonctionne que pour soi')
  .setTimestamp()
  .setFooter(`Problèmes de **Tesla Bot**, Nous essayons de régler ces problèmes au plus vite | Demandé par ${membre}`);
  
  message.channel.send(EmbedProb);
};

module.exports.help = {
  name: "problem"
}
