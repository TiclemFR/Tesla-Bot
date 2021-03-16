const Discord = require("discord.js");
const fs = require("fs");
let config = require("../modules/botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setTitle("Permission insuffisante")
        .setColor(config.red)
        .addField("❌ Permission requise:", perm);

    message.channel.send(embed);
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Erreur")
        .addField(`❌ ${user} à les mêmes permissions`, perms);

    message.channel.send(embed);

}

module.exports.botuser = (message) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription("❌ Vous ne pouvez pas ban un bot.")
        .setColor(config.red);

    message.channel.send(embed);
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription("❌ Impossible de trouver l'utilisateur.")
        .setColor(config.red);

    channel.send(embed);
}

module.exports.noReason = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription("❌ Veuillez indiquer une raison.")
        .setColor(config.red);

    channel.send(embed);
}

module.exports.noReport = (channel, message) => {
    let embed1 = new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription("❌ Le channel \"report\" n\'est pas détécté")
        .setColor(config.red);

    channel.send(embed1);
    
    let embed2 = new Discord.MessageEmbed()
        .setTitle("Résolu")
        .setDescription("✅ Je viens de créer le channel. Je vous laisse le placer comme bon vous semble.")
        .setColor(config.green);

    message.guild.channels.create('report', { type: 'text' });
    channel.send(embed2)
}
