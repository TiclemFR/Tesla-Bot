const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    await message.channel.send('...').then(async(m) => await m.edit(`🖕 Ta mère la pute !`));
};

module.exports.help = {
    name: 'pute'
}
