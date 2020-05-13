const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();
    
    const EmbedHelp = new Discord.MessageEmbed()
    .setColor('#136ee2')
    .setTitle('Liste des commandes disponible')
    .addFields('⚙️ __**Général**__', 'Commandes principales')
    .addFields('**>** help', 'Affiche les commandes')
    .addFields('**>** ping', 'Affiche la latence du bot')
    .addFields('**>** stats [Mention d\'un utilisateur]', 'Affiche les stats d\'un utilisateur')
    .addFields('**>** site', 'Donne le lien vers le site de The Tesla')
    .addFields('**>** info', 'Donne des informations sur le bot')
    .addFields('**>** serverinfo', 'Donnes des information sur le serveur')
    .addFields('**>** problemes', 'Liste tous les problèmes de **Tesla Bot**')
    .addBlankFields()
    .addFields('🛠️ Modération', 'Commandes modération')
    .addFields('**>** kick [user] [reason]', 'Kick un utilisateur')
    .addFields('**>** ban [user] [reason]', 'Ban un utilisateur')
    .addFields('**>** addrole [user] [role]', 'Ajoute le rôle à un utilisateur')
    .addFields('**>** delrole [user [role]', 'Retire le rôle à un utilisateur')
    .addBlankFields()
    .addFields('🔞 __**NSFW**__', 'Commandes NSFW')
    .addFields('**>** neko | nekolewd', 'Donne des images aléatoire NSFW, 🔞')
    .addBlankFields()
    .addFields('🎵 __**Musique**__ ⚠ **[Bêta]**', 'Peut être **instable**')
    .addFields('**>** play [Lien Youtube]', 'Lance la musique du lien youtube **(only)**')
    .addFields('**>** stop', 'Arrête la musique')
    .setTimestamp()
    .setFooter('Plus de commandes à venir | Demandé par ${membre}');
	
message.channel.send(EmbedHelp);
};


module.exports.help = {
    name: "help"
}
