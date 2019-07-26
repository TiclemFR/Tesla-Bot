const Discord = require("discord.js");
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informations du Serveur")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur:", message.guild.name)
    .addField("Crée le:", moment.utc(message.guild.createdAt).format('LLL'))
    .addField("Vous avez rejoins le:", moment.utc(message.member.joinedAt).format('LLL'))
    .addField("Membres total:", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
