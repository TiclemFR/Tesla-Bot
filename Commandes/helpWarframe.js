const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.author;
    
    const EmbedHelp1 = new Discord.MessageEmbed()
    .setColor('#674ea7')
    .setTitle('Liste des commandes disponible')
    .addFields(
        {name:'**>** cycle' , value: 'Indique les cycles des mondes ouvert'},
        {name:'**>** darvo' , value: 'Donne l\'offre journalière de Darvo'},
        {name:'**>** fissure' , value: 'Liste toutes les fissures actuellement en cours'},
        {name: '\u200B', value: '\u200B'}, //BlankField
        )
    .setTimestamp()
    .setFooter('Page 1 | Demandé par ' + membre.username);

message.channel.send(EmbedHelp1);
console.log('Invocation de l\'aide warframe');
};

module.exports.help = {
    name: "helpWarframe"
}
