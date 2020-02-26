const Discord = require("discord.js");
const money = require('../modules/money.json');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
    if(!money[message.author.id]) {
        await writeFileAsync(money, JSON.stringify({"message.author.id":{"money": 0}}))
        money[message.author.id] = {
            money: 0
        }
    }

    let userMoney = money[message.author.id].money;

    let userMoneyEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('#f36c06')
    .addField('Votre argent:', `💰 ${userMoney}`)

    message.channel.send(userMoneyEmbed);
};

module.exports.help = {
    name: "money"
};
