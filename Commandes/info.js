const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();

    message.channel.send({
        embed: {
            color: 0xc006eb,
            title: 'Information du bot',
            thumbnail: {
                url: "https://cdn.discordapp.com/attachments/589885773231423507/706574129951932436/logo2.jpg"
            },
            fields: [
                {
                    name: '🔰 __Créateur__',
                    value: 'Ticlem'
                },
                {
                    name: '📍 __Pseudo__',
                    value: 'Tesla BOT'
                },
                {
                    name: '⚙ __Version du Bot__',
                    value: '2.9.10'
                },
                {
                    name: '🏳__Langues Disponibles__',
                    value: '🇫🇷FR'
                },
                {
                    name: '✏ __Préfix__',
                    value: 't!'
                },
                {
                    name: '🗒️ __Émojis Utilisés__',
                    value: '❌: Erreur | ✅: Action réalisé | ⚠: Avertissement | 🔞: Contenus Adulte'
                },
                {
                    name: '🌐 __Website__',
                    value: 'http://thetesla.my-heberg.fr/'
                },
                {
                    name: '🔄 __Developpement__',
                    value: 'Prochaine fonctionnalité de __**Tesla BOT**__: **__...__**'
                },
            ],
            footer: {
                text: `Information de Tesla Bot`
            }
        }
    })
    console.log('Envoie des infos');
};


module.exports.help = {
    name: "info"
}
