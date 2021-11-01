const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.author;
    
    const EmbedHelp1 = new Discord.MessageEmbed()
    .setColor('#136ee2')
    .setTitle('Liste des commandes disponible 1/2')
    .addFields(
        {name:'💰 Argent' , value: 'Chaque message vous fait gagner un peu d\'argent'},
        {name:'⚙️ __**Général**__' , value: 'Commandes principales'},
        {name: '**>** help', value: 'Affiche les commandes'},
        {name: '**>** helpWarframe', value: 'Affiche les commandes pour Warframe'},
        {name: '**>** ping', value: 'Affiche la latence du bot'},
        {name: '**>** stats [@user]', value: 'Affiche les stats d\'un utilisateur'},
        {name: '**>** info', value: 'Donne des informations sur le bot'},
        {name: '**>** serverinfo', value: 'Donnes des information sur le serveur'},
        {name: '**>** money', value: 'Affiche votre argent actuel'},
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
        )
    .setTimestamp()
    .setFooter('Page 1/2 | Demandé par ' + membre.username);

    const EmbedHelp2 = new Discord.MessageEmbed()
    .setColor('#136ee2')
    .setTitle('Liste des commandes disponible 2/2')
    .addFields(
        {name: '🎮 __**Jeux**__', value: 'Commandes de Jeux'},
        {name: '**>** rps [pierre | feuille | ciseaux]', value: 'Jouer à pierre, feuille, ciseaux'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        {name: '📝 __**Services**__', value: 'Commandes pour acheter des services, utilisera l\'argent gagné'},
        {name: '**>** vadd', value: 'Ajoute un salon vocal à votre nom et vous attributs les permissions | 20 💰'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        )
    .setTimestamp()
    .setFooter('Page 2/2 | Demandé par ' + membre.username);


message.channel.send(EmbedHelp1);
message.channel.send(EmbedHelp2);
console.log('Invocation de l\'aide');
};

module.exports.help = {
    name: "help"
}
