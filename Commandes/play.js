const ytdl = require('ytdl-core');

module.exports.run = async(bot, message, args) => {

    if (!message.member.voiceChannel) return message.channel.send('❌ Connectez vous à un salon vocal !')
    if (message.guild.me.voiceChannel) return message.channel.send('❌ Le Bot est déjà connecté à un salon !')
    if(!args[0]) return message.channel.send('❌ Précisez un lien youtube')

    const validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send('❌ Lien Invalide');

    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voiceChannel.join();
    const dispatcher = await connection.playStream(
        ytdl(args[0], { filter: 'audioonly' })
    );
    message.channel.send(`Musique ajouté: **${info.title}**`);
};

module.exports.help = {
    name: 'play'
};