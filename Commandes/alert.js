const Discord = require('discord.js');
const moment = require('moment');
const https = require('https');
const { http } = require('npmlog');

module.exports.run = async (client, message, args) => {

    let url = "https://api.warframestat.us/pc/alerts"
    try {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunck) => {
                data += chunck
            })

            res.on('end', () => {
                data = JSON.parse(data)
                console.log(data)
                embed = new Discord.MessageEmbed()
                    .setColor(0x069c10)
                    .setTitle('Cycle de Cetus')
                    .addFields(
                        { name: 'Heure', value: emojiCetus + dataCetus.state.charAt(0).toUpperCase() + dataCetus.state.slice(1), inline: true },
                        { name: 'Change dans', value: dataCetus.timeLeft, inline: true }
                    )
                    .setTimestamp()

            })
        })
        message.channel.send(embed);
    }
    catch {
        message.channel.send("❌ une erreur est survenue")
    }
};


module.exports.help = {
    name: "alert"
}
