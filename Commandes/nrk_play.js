const Discord = require('discord.js');
var bot = new Discord.Client();

module.exports.run = async(bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')

    const voiceChannel = message.member.voiceChannel;
    const connection = await message.member.voice.channel.join()
    const dispatcher = connection.play('https://lyd.nrk.no/nrk_radio_mp3_mp3_h');
    
    message.channel.send(`NRK mp3 en cours de l'ecture !`);
};

module.exports.help = {
    name: 'nrk_play'
};
