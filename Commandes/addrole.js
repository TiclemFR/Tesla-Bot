const Discord = require('discord.js');
const errors = require("../modules/errors.js");

module.exports.run = async(client, message, args) => {
    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
        errors.noReport(message.channel, message);
    }
    
    if (!args.join(' ')) { return message.channel.send('Vous n\'avez pas la spécifié un nom de role !'); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return errors.noPerms(message,"MANAGE_ROLES"); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Je n\'ai pas la permission `gérer les roles` !'); }
    
    let member = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
    let role = message.guild.roles.cache.find(role => role.name === args[1]);
    if(!member){return errors.cantfindUser(message.channel);}
    if (!role) { return message.channel.send('Ce role n\'existe pas !'); }
    if (member.roles.cache.has(role.id)) { return message.channel.send('Ce membre a déjà ce role !'); }
    
        member.roles.add(role.id);
        message.react('✅');
        message.guild.channels.cache.find(channel => channel.name == 'report').send('<@' + member.id + '>' +' à désormais le role ' + role.toString());
};
module.exports.help = {
    name: 'addrole'
};
