const discord = require('discord.js');
const ytdl = require('ytdl-core');
require("./utils");

module.exports.run = async(Client, message, args, ops) => {
    //Verif
    if(!message.member.voiceChannel) return message.channel.send('Connectez vous à un salon vocal !');

    if(!args[0]) return message.channel.send('URL invalide');

    let validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send('URL invalide');

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};
    if(!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });

    if(!data.dispatcher) playStream(Client, ops, data);
    else{
        message.channel.send(`Added to Queue: ${info.title} | Requested by **${message.author}**`);
    }

    ops.active.set(message.guild.id, data);

    let playEmbed = new discord.RichEmbed()
    .setDescription('Play')
    .setColor('#BB0B0B')
    .addField(
        `GrinBot. joue ${info.title}` 

    )
    .addField('Canal de la commande', message.channel)

    let logChannel = message.guild.channels.find(`name`, "logs");
    if(!logChannel) {
        return message.channel.send("Canal introuvable");
    }

    logChannel.send(playEmbed);
    message.channel.send(`Musique ajouté: ${info.title}`);

};

async function playStream(Client, ops, data) {
    Client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by **${data.queue[0].requester}**`);
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;
    data.dispatcher.once('end', function() {
        end(Client, ops, data);
    });
}

function end(Client, ops, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
    fetched.queue.shift();
    if(fetched.queue.lenght > 0) {
        ops.activate.set(dispatcher.guildID, fetched);
        playStream(Client, ops, fetched);
    }else {
        ops.activate.delete(dispatcher.guildID);
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if(vc) vc.leave();
    }

}

module.exports.help = {
    name:"play"
}