const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();
    
    const EmbedHelp = new Discord.RichEmbed()
    .setColor('#ff0101')
    .setTitle('Liste des commandes disponible')
    .addField('⚙️ __**Général**__', 'Commandes principales')
    .addBlankField()
    .addField('**>** help', 'Affiche les commandes')
    .addField('**>** ping', 'Affiche la latence du bot')
    .addField('**>** stats [Mention d\'un utilisateur', 'Affiche les stats d\'un utilisateur')
    .addField('**>** site', 'Donne le lien vers le site de The Tesla')
    .addField('**>** info', 'Donne des informations sur le bot')
    .addBlankField()
    .addField('🛠️ Modération', 'Commandes modération')
    .addBlankField()
    .addField('**>** kick [user] [reason]', 'Kick un utilisateur')
    .addField('**>** ban [user] [reason]', 'Ban un utilisateur')
    .addBlankField()
    .addField('🔞 __**NSFW**__', 'Commandes NSFW')
    .addBlankField()
    .addField('**>** neko | nekolewd', 'Donne des images aléatoire NSFW, ⚠️🔞')
    .addBlankField()
    .addField('🎵 __**Musique**__ ⚠ **[Bêta]**', 'Pour la musique ⚠ peut être **instable**')
    .addBlankField()
    .addField('**>** play [Lien Youtube]', 'Lance la musique du lien youtube **(only)**')
    .addField('**>** stop', 'Arrête la musique')
    .setTimestamp()
	.setFooter('Plus de commandes à venir');
};


module.exports.help = {
    name: "help"
}
