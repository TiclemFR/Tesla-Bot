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

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: t!kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    if(kUser.id === bot.user.id) return errors.botuser(message); 
    let kReason = args.join(" ").slice(22);
    if(!kReason) return errors.noReason(message.channel);
    if(kUser.hasPermission("KICK_MEMBERS")) return errors.equalPerms(message, kUser, "KICK_MEMBERS");

    let kickEmbed = new Discord.MessageEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addFields(
            {name: 'Kicked User', value: `${kUser} with ID ${kUser.id}`},
            {name: 'Kicked By', value: `<@${message.author.id}> with ID ${message.author.id}`},
            {name: 'Kicked In', value: message.channel},
            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
            {name: 'Reason', value: kReason},
        );

    message.guild.member(kUser).kick(kReason);
    message.guild.channels.cache.find(channel => channel.name == 'report').send(kickEmbed);
    console.log(`${kUser} à été explusé à ${moment.utc(message.createdAt).format('LLL')}`);
}

module.exports.help = {
  name:"kick"
}
