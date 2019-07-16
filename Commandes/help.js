const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first();

    message.channel.send({
        embed: {
            color: 0xff0101,
            title: 'Liste des commandes disponible',
            thumbnail: {
                url: null
            },
            fields: [
                {
                    name: '⚙ __**Général**__',
                    value: 'Commandes principales'
                },
                {
                    name: '**>** help',
                    value: 'Affiche les commandes'
                },
                {
                    name: '**>** ping',
                    value: 'Affiche la latence du bot'
                },
                {
                    name: "**>** stats [mention d'un utilisateur]",
                    value: 'Affiche les stats d\'un utilisateur'
                },
                {
                    name: '**>** site',
                    value: 'Donne le lien vers le site de The Tesla'
                },
                {
                    name: '**>** info',
                    value: 'Donne des informations sur le bot'
                },
                {
                    name: '🛠️ __**Modération**__',
                    value: 'Commandes de modération'
                },
                {
                    name: '**>** clear [nombre de message]',
                    value: 'Supprime le nombre de message indiqué, SAUF ce de plus de 14 jours'
                },
                {
                    name: '🔞 __**NSFW**__',
                    value: "Commandes NSFW"
                },
                {
                    name: '**>** neko | nekolewd',
                    value: 'Donne des images aléatoire NSFW, ⚠🔞'
                },
                {
                    name: '🎵 __**Musique**__ ⚠ **[Bêta]**',
                    value: 'Pour la musique ⚠ peut être **instable**'
                },
                {
                    name: '**>** play [Lien Youtube]',
                    value: 'Lance la musique du lien youtube **(only)**'
                },
                {
                    name: '**>** stop',
                    value: 'Arrête la musique'
                },
            ],
            footer: {
                text: `Plus de commandes à venir`
            }
        }
    })
};


module.exports.help = {
    name: "help"
}
