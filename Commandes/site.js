const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    await message.channel.send('....').then(async(m) => await m.edit('http://thetesla.my-heberg.fr/'));
};

module.exports.help = {
    name: 'site'
}