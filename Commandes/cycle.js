const Discord = require('discord.js');
const moment = require('moment');
const https = require('https');
const { http } = require('npmlog');

module.exports.run = async(client, message, args) => {

    let urlCetus = "https://api.warframestat.us/pc/cetusCycle"
    let urlVallis = "https://api.warframestat.us/pc/vallisCycle"
    let urlCambion = "https://api.warframestat.us/pc/cambionCycle"

    let embedCambion
    let embedCetus
    let embedVallis
    try {
        https.get(urlCetus, (respCetus) => {
            let dataCetus = '';

            respCetus.on('data', (chunkCetus) => {
                dataCetus += chunkCetus
            })

            respCetus.on('end', () => {
                dataCetus = JSON.parse(dataCetus)
                let colorCetus
                let emojiCetus
                if(dataCetus.isDay == true){
                    colorCetus = 0xf1c232
                    emojiCetus = ':sunny:'
                }
                else{
                    colorCetus = 0x0b5394
                    emojiCetus = ':crescent_moon: '
                }
                embedCetus = new Discord.MessageEmbed()
                .setColor(colorCetus)
                .setTitle('Cycle de Cetus')
                .addFields(
                    {name: 'Heure', value: emojiCetus + dataCetus.state.charAt(0).toUpperCase() + dataCetus.state.slice(1), inline: true},
                    {name: 'Change dans', value: dataCetus.timeLeft, inline: true}
                )
                .setTimestamp()
                
            })
        })
    } catch (error) {
        message.channel.send({
            embed: {
                color: 0xFF0000,
                title: 'Une erreur est survenue',
                thumbnail: {
                    url: "https://cdn.discordapp.com/attachments/589885773231423507/904646348459106334/sign-error-icon-10.png"
                },
                fields: [
                    {
                        name: 'Error message',
                        value: error
                    },
                ],
                footer: {
                    text: `API DE WARFRAME`
                }
            }
        })
    }
    try {
        https.get(urlCambion, (respCambion) => {
            let dataCambion = ''
            
            respCambion.on('data', (chunkCambion) => {
                dataCambion += chunkCambion
            })

            respCambion.on('end', () => {
                dataCambion = JSON.parse(dataCambion)
                let colorCambion
                if(dataCambion.active == "vome"){
                    colorCambion = 0x6fa8dc
                }
                else{
                    colorCambion = 0xe69138
                }
                embedCambion = new Discord.MessageEmbed()
                .setColor(colorCambion)
                .setTitle('Cycle du Puy de Cambion')
                .addFields(
                    {name: 'Actif', value: dataCambion.active.charAt(0).toUpperCase() + dataCambion.active.slice(1), inline: true},
                    {name: 'Change dans', value: dataCambion.timeLeft, inline: true}
                )
                .setTimestamp()
            })
        })
    } catch (error) {
        message.channel.send({
            embed: {
                color: 0xFF0000,
                title: 'Une erreur est survenue',
                thumbnail: {
                    url: "https://cdn.discordapp.com/attachments/589885773231423507/904646348459106334/sign-error-icon-10.png"
                },
                fields: [
                    {
                        name: 'Error message',
                        value: error
                    },
                ],
                footer: {
                    text: `API DE WARFRAME`
                }
            }
        })
    }
    try {
        https.get(urlVallis, (respVallis) => {
            let dataVallis = ''

            respVallis.on('data', (chunkVallis) =>{
                dataVallis += chunkVallis
            })

            respVallis.on('end', () => {
                let emojiVallis
                let colorVallis
                let stateVallis
                dataVallis = JSON.parse(dataVallis)
                if(dataVallis.isWarm == true){
                    stateVallis = 'Chaud'
                    colorVallis = 0xcc0000
                    emojiVallis = ':hotsprings: '
                }
                else{
                    stateVallis = 'Froid'
                    colorVallis = 0x9fc5e8
                    emojiVallis = ':snowflake: '
                }
                embedVallis = new Discord.MessageEmbed()
                .setColor(colorVallis)
                .setTitle('Cycle de la Vallé Orbis')
                .addFields(
                    {name: 'Température', value: emojiVallis + stateVallis, inline: true},
                    {name: 'Change dans', value: dataVallis.timeLeft, inline: true}
                )
                .setTimestamp()
            })
        })
        
    } catch (error) {
        message.channel.send({
            embed: {
                color: 0xFF0000,
                title: 'Une erreur est survenue',
                thumbnail: {
                    url: "https://cdn.discordapp.com/attachments/589885773231423507/904646348459106334/sign-error-icon-10.png"
                },
                fields: [
                    {
                        name: 'Error message',
                        value: error
                    },
                ],
                footer: {
                    text: `API DE WARFRAME`
                }
            }
        })
    }

   setTimeout(function(){
       try {
            message.channel.send(embedCetus)
            message.channel.send(embedVallis)
            message.channel.send(embedCambion)
       } catch (error) {
        message.channel.send({
            embed: {
                color: 0xFF0000,
                title: 'Une erreur est survenue',
                thumbnail: {
                    url: "https://cdn.discordapp.com/attachments/589885773231423507/904646348459106334/sign-error-icon-10.png"
                },
                fields: [
                    {
                        name: 'Error message',
                        value: error
                    },
                ],
                footer: {
                    text: `API DE WARFRAME`
                }
            }
        })
       }
    
   }, 1000)
};


module.exports.help = {
    name: "cycle"
}
