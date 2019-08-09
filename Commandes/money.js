const Discord = require("discord.js");
const money = require('../modules/money.json');

module.exports.run = async (bot, message, args) => {
    if(!money[MessageChannel.author.id]) {
        money[MessageChannel.author.id] = {
            money: 0
        }
    }

    let userMoney = money[message.author.id].money;

    let userMoneyEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('')
    .addField('Argent Actuelle:', `💰 ${userMoney}`)

    message.channel.send(userMoneyEmbed);
};

module.exports.help = {
    name: "money"
};