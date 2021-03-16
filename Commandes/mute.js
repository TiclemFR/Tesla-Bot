const Discord = require('discord.js');
const moment = require('moment');
const errors = require("../modules/errors.js");

module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBER")){
        return errors.noPerms(message,"MUTE_MEMBER");
    }
    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
        return errors.noReport(message.channel, message);
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
        return errors.cantfindUser(message.channel);
    }
    let mReason = args.join(" ").slice(22);
    if(!mReason){
        return errors.noReason(message.channel);
    }

    let muteEmbed = new Discord.MessageEmbed()
    .setDescription("~Mute~")
    .setColor("#e68e34")
    .addFields(
            {name: 'Muted User', value: `${mUser} with ID ${mUser.id}`},
            {name: 'Muted By', value: `<@${message.author.id}> with ID ${message.author.id}`},
            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
            {name: 'Reason', value: mReason},
        );
    if(mUser.roles.cache.has(role.id)){
        message.channel.send(`❌ ${mUser} est déjà mute`);
    }
    else{
        mUser.roles.add(role.id);
        message.react('✅');
        message.guild.channels.cache.find(channel => channel.name == 'report').send(muteEmbed);
    }
    
   
};

module.exports.help = {
    name: "mute"
}