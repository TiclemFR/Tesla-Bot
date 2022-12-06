const Discord = require('discord.js');
const moment = require('moment');
const https = require('https');
const { http } = require('npmlog');

module.exports.run = async (client, message, args) => {

    let url = "https://api.warframestat.us/pc/dailyDeals/"
    try {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunck) => {
                data += chunck
            })

            res.on('end', () => {
                data = JSON.parse(data)
                data.forEach(element => {
                    embed = new Discord.MessageEmbed()
                        .setColor(0xa3059e)
                        .setTitle('Offre du jour de Darvo')
                        .addFields(
                            { name: 'Item', value: element.item },
                            { name: 'Prix de base', value: element.originalPrice, inline: true },
                            { name: 'Prix de vente', value: element.salePrice, inline: true },
                            { name: 'Réduction', value: element.discount + '%', inline: true },
                            { name: 'Nombre d\'item en vente', value: element.total, inline: true },
                            { name: 'Nombre d\'item vendu', value: element.sold, inline: true },
                            { name: 'Expire dans', value: element.eta }
                        )
                        .setTimestamp()
                    message.channel.send(embed)
                });

            })
        })
    }
    catch {
        message.channel.send("❌ une erreur est survenue")
    }
};


module.exports.help = {
    name: "darvo"
}
