module.exports.run = async(bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send('❌ Connectez vous à un salon vocal !');
    if (!message.guild.me.voice.channel) return message.channel.send('❌ Le Bot n\'est pas connecté !');

    if (message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send('❌ Vous n\'êtes pas dans le même salon !');
    message.guild.me.voice.channel.leave();
};

module.exports.help = {
    name: 'stop'
};