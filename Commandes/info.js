const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();

    message.channel.send({
        embed: {
            color: 0xc006eb,
            title: 'Information du bot',
            thumbnail: {
                url: null
            },
            fields: [
                {
                    name: '🔰 __Créateur__',
                    value: 'Ticlem83'
                },
                {
                    name: '📍 __Pseudo__',
                    value: 'Tesla BOT'
                },
                {
                    name: '⚙ __Version du Bot__',
                    value: '⚠️ **[Bêta]** 1.3'
                },
                {
                    name: '🏳__Langue du Bot__',
                    value: '🇫🇷FR'
                },
                {
                    name: '✏ __Préfix__',
                    value: 't!'
                },
                {
                    name: '🌐 __Website__',
                    value: 'https://thetesla.voxan24.me/'
                },
                {
                    name: '🔄 __Developpement__',
                    value: 'Prochaine fonctionnalité de __**Tesla BOT**__: __Recherche....__'
                },
            ],
            footer: {
                text: `Plus d'info à venir`
            }
        }
    })
};


module.exports.help = {
    name: "info"
}
