const Discord = require("discord.js");
const money = require('../modules/money.json');

module.exports.run = async (bot, message, args) => {

    await writeFileAsync(money, JSON.stringify({"message.author.id":{"money": +10}}))

    let userMoney = money[message.author.id].money;
    userMoney = userMoney + 10;

    let userMoneyEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('#f36c06')
    .addField('Votre argent est maintenant de:', `💰 ${userMoney}`)

    message.channel.send(userMoneyEmbed);
};

module.exports.help = {
    name: "moneyAdd"
};
