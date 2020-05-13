const Discord = require("discord.js");
const fs = require("fs");
let config = require("../modules/botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Permission insuffisante")
        .setColor(config.red)
        .addField("Permission requise:", perm);

    message.channel.send(embed);
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Erreur")
        .addField(`${user} à les mêmes permissions`, perms);

    message.channel.send(embed);

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("Vous ne pouvez pas ban un bot.")
        .setColor(config.red);

    message.channel.send(embed);
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("Impossible de trouver l'utilisateur.")
        .setColor(config.red);

    channel.send(embed);
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Erreur")
        .setDescription("Veuillez indiquer une raison.")
        .setColor(config.red);

    channel.send(embed);
}
