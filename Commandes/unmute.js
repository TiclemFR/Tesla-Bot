const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBER")){
        message.channel.send('❌ vous n\'avez pas les permissions pour unmute un utilisateur');
    }
    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
        message.guild.channels.cache.find(channel => channel.name == 'report');
        message.channel.send('❌ Le channel \"report\" n\'est pas détécté');
        message.guild.channels.create('report', {type : 'text'});
        message.channel.send('✅ Je viens de créer le channel. Je vous laisse le placer comme bon vous semble.');
    }
    if(!message.guild.roles.cache.find(role => role.name == 'mute')){
        message.channel.send('❌ Le role "mute" n\'existe pas');
        message.guild.roles.create({
            data: {
                name: 'mute',
                position: message.guild.roles.cache.find(role => role.name == 'Tesla BOT').position - 1,
                color: 'ORANGE',
            }
        });
        message.channel.send('✅ J\'ai crée le role "mute". Pensez à mettre les permission souhaiter en cas de mute');
    }
    let role = message.guild.roles.cache.find(role => role.name == 'mute');
    let mUser = message.guild.member(message.mentions.users.first());
    if(!mUser){
        message.channel.send('❌ Vous devez mentionner un utilisateur');
    }

    let muteEmbed = new Discord.MessageEmbed()
    .setDescription("~Mute~")
    .setColor("#e68e34")
    .addFields(
            {name: 'UnMuted User', value: `${mUser} with ID ${mUser.id}`},
            {name: 'UmMuted By', value: `<@${message.author.id}> with ID ${message.author.id}`},
            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
        );
    if(!mUser.roles.cache.has(role.id)){
        message.channel.send(`❌ ${mUser} n\'à pas était mute`);
    }
    else{
        mUser.roles.remove(role.id);
        message.guild.channels.cache.find(channel => channel.name == 'report').send(muteEmbed);
    }
   
   
};

module.exports.help = {
    name: "unmute"
}