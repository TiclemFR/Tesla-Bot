const Discord = require('discord.js');
var bot = new Discord.Client();

module.exports.run = async(bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')

    
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
    const client = message.guild.me.voiceChannel;
    const broadcast = client.voice.createBroadcast();
broadcast.play('https://lyd.nrk.no/nrk_radio_mp3_mp3_h');
for (const connection of client.voice.connections.values()) {
  connection.play(broadcast);
}
    
    message.channel.send(`NRK mp3 en cours de l'ecture !`);
};

module.exports.help = {
    name: 'nrk_play'
};
