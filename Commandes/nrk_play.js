const Discord = require('discord.js');
var bot = new Discord.Client();

module.exports.run = async(bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')
    const client = message.guild.me.voiceChannel;
    const broadcast = client.createVoiceBroadcast();
    
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection => {
    broadcast.playFile('https://lyd.nrk.no/nrk_radio_mp3_mp3_h');
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);
    
    message.channel.send(`NRK mp3 en cours de l'ecture !`);
};

module.exports.help = {
    name: 'nrk'
};
