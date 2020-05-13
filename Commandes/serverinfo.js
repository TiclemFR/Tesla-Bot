const Discord = require("discord.js");
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setDescription("Informations du Serveur")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addFields(
        {name: 'Nom du serveur:', value: message.guild.name},
        {name: 'Crée le:', value: moment.utc(message.guild.createdAt).format('LLL')},
        {name: 'Vous avez rejoins le:', value: moment.utc(message.member.joinedAt).format('LLL')},
        {name: 'Membres total:', value: message.guild.memberCount},
    )

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
