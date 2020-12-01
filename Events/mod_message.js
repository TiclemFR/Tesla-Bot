const Discord = require('discord.js');
const TAB = 30;

module.exports = async(client, message) => {
    client.on('message', message => {
        if (message.content === 'ça va') {
            message.channel.send('ok');
            }
};