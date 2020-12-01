const Discord = require('discord.js');
const TAB = 30;

module.exports = async(client, message) => {
    let member = message.author;
    var msg = message.content;
    if(msg =='bonjour'){
        message.channel.send('ok');
    }
};