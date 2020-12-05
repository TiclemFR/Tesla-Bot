const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.author;
    
    const EmbedHelp = new Discord.MessageEmbed()
    .setColor('#136ee2')
    .setTitle('Liste des commandes disponible')
    .addFields(
        {name:'⚙️ __**Général**__' , value: 'Commandes principales'},
        {name: '**>** help', value: 'Affiche les commandes'},
        {name: '**>** ping', value: 'Affiche la latence du bot'},
        {name: '**>** stats [@user]', value: 'Affiche les stats d\'un utilisateur'},
        {name: '**>** site', value: 'Donne le lien vers le site de The Tesla'},
        {name: '**>** info', value: 'Donne des informations sur le bot'},
        {name: '**>** serverinfo', value: 'Donnes des information sur le serveur'},
        {name: '**>** problemes', value: 'Liste tous les problèmes de **Tesla Bot**'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        {name: '🛠️ Modération', value: 'Commandes de modération'},
        {name: '🔧 Logs', value: 'Les commandes de modération nécessite un channel "report", si il n\'est pas crée, le bot le fera lui même et vous pourez le déplacer à votre guise'},
        {name: '**>** kick [@user] [reason]', value: 'Kick un utilisateur'},
        {name: '**>** ban [@user] [reason]', value: 'Ban un utilisateur'},
        {name: '**>** addrole [@user] [role]', value: 'Ajoute le rôle à un utilisateur'},
        {name: '**>** delrole [@user] [role]', value: 'Retire le rôle à un utilisateur'},
        {name: '**>** warn [@user] [reason]', value: 'Warn un utilisateur'},
        {name: '**>** mute [@user] [reason]', value: 'Mute un utilisateur'},
        {name: '**>** unmute [@user]', value: 'Unmute un utilisateur'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        {name: '🔞 __**NSFW**__', value: 'Commandes NSFW'},
        {name: '**>** neko | nekolewd', value: 'Donne des images aléatoire NSFW, 🔞'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        {name: '🎮 __**Jeux**__', value: 'Commandes de Jeux'},
        {name: '**>** rps [pierre | feuille | ciseaux]', value: 'Jouer à pierre, feuille, ciseaux'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        )
    .setTimestamp()
    .setFooter('Plus de commandes à venir | Demandé par ' + membre.username);


message.channel.send(EmbedHelp);
console.log('Invocation de l\'aide');
};

module.exports.help = {
    name: "help"
}
