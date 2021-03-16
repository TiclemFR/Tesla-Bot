const Discord = require("discord.js");
const moment = require('moment');
const mysql = require('mysql');
const db = require("../modules/connect.js");
const errors = require("../modules/errors.js");

module.exports.run = async (client, message, args) => {
    var membre = message.author.username;
    var membre_id = message.author.id;

    if (message.guild.channels.cache.find(channel => channel.name == `${membre}_voc`)) {
        message.guild.channels.cache.find(channel => channel.name == `${membre}_voc`);
        message.channel.send(`❌ Le channel \"${membre}_voc\" existe déjà`);

    }
    else {
        db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function (err, result) {
            if (err) throw err;
            if (result[0].gold < 20) {
                message.channel.send('❌ Vous n\'avez pas asser d\'argent');
            }
            else {
                message.guild.channels.create(`${membre}_voc`, {
                    type: 'voice',
                    permissionOverwrites: [
                        {
                            id: message.guild.id,
                            deny: ['CREATE_INSTANT_INVITE'],
                            deny: ['VIEW_CHANNEL'],
                            allow: ['CONNECT'],
                        },
                        {
                            id: membre_id,
                            deny: ['CREATE_INSTANT_INVITE'],
                            allow: ['VIEW_CHANNEL'],
                            allow: ['MANAGE_ROLES'],
                        },
                    ],
                });

                message.channel.send(`✅ le channel ${membre}_voc à été créé. ⚠ Uniquement vous pouvez voir ce channel. Pensez à accorder les permissions à vos amis ! Ce service vous a couté 20 💰`);

                db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function (err, result) {
                    if (err) throw err;

                    var achat = 20;
                    var gold = result[0].gold - achat;
                    db.query(`UPDATE user_discord SET gold = ${gold} WHERE id_discord = ${membre_id}`, function (err, result) {
                        if (err) throw err;
                        console.log(`L'utilisateur ${membre} viens d'acheter un salon vocal pour ${achat} gold`);
                    });
                    if (!message.guild.channels.cache.find(channel => channel.name == 'report')) {
                        return errors.noReport(message.channel, message);
                    }
                    message.react('✅');
                    let channEmbed = new Discord.MessageEmbed()
                        .setTitle("Channel create")
                        .setColor("#8fbc8f")
                        .addFields(
                            { name: 'Created By', value: `${membre} with ID ${membre_id}` },
                            { name: 'Time', value: moment.utc(message.createdAt).format('LLL') },
                            { name: 'Permission', value: `Les permissions ont été accordées à ${membre}, en tant qu'administrateur vous gardez la main !` }
                        );
                    message.guild.channels.cache.find(channel => channel.name == 'report').send(channEmbed);
                });
            }
        });
    }



}

module.exports.help = {
    name: "vadd"
}