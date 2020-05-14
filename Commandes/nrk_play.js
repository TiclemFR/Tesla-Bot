const Discord = require('discord.js');
var bot = new Discord.Client();

module.exports.run = async(bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voice.channel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')
    const client = message.guild.me.voice.channel;
    const connection = await message.member.voice.channel.join();
    
    const dispatcher = connection.play('https://lyd.nrk.no/nrk_radio_mp3_mp3_h');
    
    message.channel.send(`NRK mp3 en cours de l'ecture !`);
    
    

    
    
};

module.exports.help = {
    name: 'nrk'
};
