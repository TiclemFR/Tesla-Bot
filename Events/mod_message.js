const Discord = require('discord.js');
const TAB = 30;

module.exports = async(client, message) => {
    let member = message.author;
    if(message.content =='bonjour'){
        message.channel.send('ok');
    }
};