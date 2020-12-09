const Discord = require("discord.js");
const errors = require("../modules/errors.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
    message.guild.channels.cache.find(channel => channel.name == 'report');
    message.channel.send('❌ Le channel \"report\" n\'est pas détécté');
    message.guild.channels.create('report', {type : 'text'});
    message.channel.send('✅ Je viens de créer le channel. Je vous laisse le placer comme bon vous semble.');
}

    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: t!ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("BAN_MEMBERS")) return errors.equalPerms(message, bUser, "BAN_MEMBERS");

    let banEmbed = new Discord.MessageEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addFields(
            {name: 'Banned User', value: `${bUser} with ID ${bUser.id}`},
            {name: 'Banned By', value: `<@${message.author.id}> with ID ${message.author.id}`},
            {name: 'Banned In', value: message.channel},
            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
            {name: 'Reason', value: bReason},
        );

    message.guild.member(bUser).ban(bReason);
    message.react('✅');
    message.guild.channels.cache.find(channel => channel.name == 'report').send(banEmbed);
    console.log(`${bUser} a été banni à ${moment.utc(message.createdAt).format('LLL')}`);
}

module.exports.help = {
  name:"ban"
}
