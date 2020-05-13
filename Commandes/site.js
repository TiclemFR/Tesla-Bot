const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    await message.channel.send('....').then(async(m) => await m.edit('https://thetesla.voxan24.me/'));
};

module.exports.help = {
    name: 'site'
}