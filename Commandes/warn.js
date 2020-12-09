const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBER")){
        message.channel.send('❌ vous n\'avez pas les permissions pour warn un utilisateur');
    }
    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
        message.guild.channels.cache.find(channel => channel.name == 'report');
        message.channel.send('❌ Le channel \"report\" n\'est pas détécté');
        message.guild.channels.create('report', {type : 'text'});
        message.channel.send('✅ Je viens de créer le channel. Je vous laisse le placer comme bon vous semble.');
    }

    let wUser = message.guild.member(message.mentions.users.first());
    if(!wUser){
        message.channel.send('❌ Vous devez mentionner un utilisateur');
    }
    let wReason = args.join(" ").slice(22);
    if(!wReason){
        message.channel.send('❌ Vous devez indiquer la raison du warn');
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