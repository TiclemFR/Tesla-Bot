const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
    	message.channel.send('❌ ACCESS DENIED Vous n\'avez pas la permissions requise pour éxécuter cette commande !').catch(console.error);
    	console.warn('Un utilisateur non agrémenté à tenté d\'effacer des messages');
    };

    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('❌ ERREUR Je n\'ai pas la permission d\'éxécuter cette commande !').catch(console.error);

    if(!args[0]) return message.channel.send('❌ Veuillez spécifier le nombre de message à supprimer !');

    if(isNaN(args[0])) return message.channel.send('❌ Veuillez spécifier un nombre !');

    if((args[0]) > 100) return message.channel.send('❌ La limite de l\'API Discord est de 100 messages.');

    message.channel.bulkDelete(args[0]);

    message.channel.send(`✅ ${args[0]} messages ont été supprimés ! `);
    console.log(`${args[0]} message viennent d\'être supprimés par ${message.author}`);
    setTimeout(function(){message.channel.bulkDelete(1);}, 3000);

};

module.exports.help = {
    name: 'clear'
}