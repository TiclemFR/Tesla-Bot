const Discord = require('discord.js');
const TAB = 30;

module.exports = async(client, message) => {
    let member = message.author;
    var message = message.content;
    message.channel.send(message[0]);
};