const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')

    
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    const broadcast = client.voice.createBroadcast();
    broadcast.play('https://lyd.nrk.no/nrk_radio_mp3_mp3_h');
    message.channel.send(`NRK mp3 en cours de l'ecture !`);
};

module.exports.help = {
    name: 'nrk_play'
};
