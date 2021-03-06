const Discord = require("discord.js");
const errors = require("../modules/errors.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: t!kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return errors.equalPerms(message, kUser, "KICK_MEMBERS");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", moment.utc(message.createdAt).format('LLL'))
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "report");
    if(!kickChannel) return message.channel.send("Impossible de trouver le channel de log (report).");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
