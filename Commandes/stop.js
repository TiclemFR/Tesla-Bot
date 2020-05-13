module.exports.run = async(bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !');
    if (!message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot n\'est pas connecté !');

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('❌ Vous n\'êtes pas dans le même salon !');
    message.guild.me.voiceChannel.leave();
};

module.exports.help = {
    name: 'stop'
};