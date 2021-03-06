const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!args.join(' ')) { return message.channel.send('Vous n\'avez pas la spécifié un nom de role !'); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Vous n\'avez pas la permission `gérer les roles` !'); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Je n\'ai pas la permission `gérer les roles` !'); }

     let member = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first();

    if(!member){return message.channel.send('Vous devez mentionner un utilisateur !');}
    if (!role) { return message.channel.send('Ce role n\'existe pas !'); }
    if (!member.roles.has(role.id)) { return message.channel.send('Vous n\'avez pas ce role !'); }
    
        member.removeRole(role.id)
            .then(() => message.channel.send(member +' n\'à désormais plus le role ' + role.toString()))
            .catch(console.error);
};

module.exports.help = {
    name: 'delrole'
};
