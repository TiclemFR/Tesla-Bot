const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    await message.channel.send('....').then(async(m) => await m.edit('❌Veuillez indiquer une commande'));
};

module.exports.help = {
    name: ''
}