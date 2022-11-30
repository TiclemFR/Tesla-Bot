const Discord = require('discord.js');
const moment = require('moment');
const errors = require("../modules/errors.js");

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBER")){
        return errors.noPerms(message, "MUTE_MEMBER");
    }
    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
        errors.noReport(message.channel, message);
    }

    let wUser = message.guild.member(message.mentions.users.first());
    if(!wUser){
        return errors.cantfindUser(message.channel);
    }
    let wReason = args.join(" ").slice(22);
    if(!wReason){
        return errors.noReason(message.channel);
    }

    let warnEmbed = new Discord.MessageEmbed()
    .setDescription("~Warn~")
    .setColor("#e68e34")
    .addFields(
            {name: 'Warned User', value: `${wUser} with ID ${wUser.id}`},
            {name: 'Warned By', value: `<@${message.author.id}> with ID ${message.author.id}`},
            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
            {name: 'Reason', value: wReason},
        );
    message.react('✅');
    message.guild.channels.cache.find(channel => channel.name == 'report').send(warnEmbed);
   
};

module.exports.help = {
    name: "warn"
}