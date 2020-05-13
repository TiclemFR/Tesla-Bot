const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();
    if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur`);

    message.channel.send({
        embed: {
            color: 0xffe800,
            title: `Statistique de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: '> ID:',
                    value: membre.id 
                },
                {
                    name: '> Crée le:',
                    value: moment.utc(membre.user.createdAt).format('LLL')
                },
                {
                    name: "> Jeu en cours:",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : `Aucun jeu`}`
                },
                {
                    name: '> Rejoin le:',
                    value: moment.utc(membre.joinedAt).format('LLL')
                },
            ],
            footer: {
                text: `Information de l'utilisateur ${membre.user.username}`
            }
        }
    })
};

module.exports.help = {
    name: "stats"
}