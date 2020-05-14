const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

module.exports.run = async(client, message, args) => {

	const voiceChannel = message.member.voice.channel;
	if(!voiceChannel){return message.reply('❌ Connectez-vous d\'abord dans un salon vocal')};
	if(!args[0]){return message.reply('❌ Indiquez un lien Youtube')};

	voiceChannel.join().then(connection => {
	const stream = ytdl(args[0], { filter: 'audioonly' });
	const dispatcher = connection.play(stream);

	dispatcher.on('end', () => voiceChannel.leave());

	});
};

module.exports.help = {
    name: "yt"
};
