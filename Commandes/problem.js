const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
  
  const membre = message.author.tag;
  
  const EmbedProb = new Discord.MessageEmbed()
  .setColor('#e40a0a')
  .setTitle('Liste des problèmes de **Tesla Bot**')
  .addFields(
  	{name: 'Aucun problèmes actuellement'},
  	)
  .setTimestamp()
  .setFooter(`Problèmes de Tesla Bot, Nous essayons de régler ces problèmes au plus vite | Demandé par ${membre}`);
  
  message.channel.send(EmbedProb);
};

module.exports.help = {
  name: "problemes"
}
