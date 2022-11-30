const Discord = require('discord.js');
const moment = require('moment');
const https = require('https');
const { http } = require('npmlog');

module.exports.run = async(client, message, args) => {

    let url = "https://api.warframestat.us/pc/fissures?language=fr"
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
                    .setColor(0xbfb8bf)
                    .setTitle(element.missionType)
                    .addFields(
                        {name: 'Lieux', value: element.node, inline: true},
                        {name: 'Ennemis', value: element.enemy, inline: true},
                        {name: 'Relique', value: element.tier},
                        {name: 'Expire dans', value: element.eta},
                    )
                    .setTimestamp()
                    message.channel.send(embed)
                });
            })
        })
    }
    catch{
        message.channel.send("❌ une erreur est survenue")
    }
};


module.exports.help = {
    name: "fissure"
}
