const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();
    
    const EmbedHelp = new Discord.RichEmbed()
    .setColor('#136ee2')
    .setTitle('Liste des commandes disponible')
    .addField('⚙️ __**Général**__', 'Commandes principales')
    .addField('**>** help', 'Affiche les commandes')
    .addField('**>** ping', 'Affiche la latence du bot')
    .addField('**>** stats [Mention d\'un utilisateur]', 'Affiche les stats d\'un utilisateur')
    .addField('**>** site', 'Donne le lien vers le site de The Tesla')
    .addField('**>** info', 'Donne des informations sur le bot')
    .addField('**>** serverinfo', 'Donnes des information sur le serveur')
    .addField('**>** problem', 'Liste tous les problèmes de **Tesla Bot**')
    .addBlankField()
    .addField('🛠️ Modération', 'Commandes modération')
    .addField('**>** kick [user] [reason]', 'Kick un utilisateur')
    .addField('**>** ban [user] [reason]', 'Ban un utilisateur')
    .addField('**>** addrole [user] [role]', 'Ajoute le rôle à un utilisateur ⚠ t!problem')
    .addField('**>** delrole [user [role]', 'Retire le rôle à un utilisateur ⚠ t!problem')
    .addBlankField()
    .addField('🔞 __**NSFW**__', 'Commandes NSFW')
    .addField('**>** neko | nekolewd', 'Donne des images aléatoire NSFW, ⚠🔞')
    .addBlankField()
    .addField('🎵 __**Musique**__ ⚠ **[Bêta]** t!problem', 'Peut être **instable**')
    .addField('**>** play [Lien Youtube]', 'Lance la musique du lien youtube **(only)**')
    .addField('**>** stop', 'Arrête la musique')
    .setTimestamp()
    .setFooter('Plus de commandes à venir');
	
message.channel.send(EmbedHelp);
};


module.exports.help = {
    name: "help"
}
