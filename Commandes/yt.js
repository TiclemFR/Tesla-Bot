const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

const client = new Discord.Client();

module.exports.run = async(client, message, args) => {

	const voiceChannel = message.member.voice.channel;
	if(!voiceChannel){return message.reply('❌ Connectez-vous d\'abord dans un salon vocal')};
	if(!args[0]){return message.reply('❌ Indiquez un lien Youtube')};
	const validate = await ytdl.validateURL(args[0]);
	if(!validate){return message.reply('❌ L\'URL n\'est pas valide')};

	const info = await ytdl.getInfo(args[0]);
	voiceChannel.join().then(connection => {
	const stream = ytdl(args[0], { filter: 'audioonly' });
	const dispatcher = connection.play(stream);
	message.channel.send(`Musique ajoutée: ${info.title}`);

	dispatcher.on('end', () => voiceChannel.leave());

	});
};

module.exports.help = {
    name: "yt"
};
