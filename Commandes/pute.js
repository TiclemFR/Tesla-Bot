const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    await message.channel.send('...').then(async(m) => await m.edit(`🖕 Ta mère la pute !`));
};

module.exports.help = {
    name: 'pute'
}
