const Discord = require("discord.js");
const moment = require('moment');
const mysql  =require('mysql');

module.exports.run = async (client, message, args) => {
    var membre = message.author.username;
    var membre_id = message.author.id;
    const db = mysql.createConnection({

        host: process.env.host,
    
        user: process.env.user,
    
        password: process.env.pass,

        database: process.env.database
    
    });
    // en cas de déconnexion
    db.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            db.connect();
        } else {
            throw err;
        }
    });
    db.connect(function(err) {

        if (err) throw err;
    
        console.log(`Mise à jour du compte de ${membre}`);
 
    });

    if(message.guild.channels.cache.find(channel => channel.name == `${membre}_voc`)){
        message.guild.channels.cache.find(channel => channel.name == `${membre}_voc`);
        message.channel.send(`❌ Le channel \"${membre}_voc\" existe déjà`);
        
    }
    else{
        message.guild.channels.create(`${membre}_voc`, {
            type : 'voice',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: membre_id,
                    allow: ['MANAGE_CHANNELS'],
                },
            ],
    });
        message.channel.send(`✅ le channel ${membre}_voc à été créé. ⚠ Uniquement vous pouvez voir ce channel. Pensez à accorder les permissions à vos amis ! Ce service vous à couté 20 💰`);
        
        db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function(err,result){
                    if(err) throw err;
                    if(result[0].gold < 20){
                        message.channel.send('❌ vous n\'avez pas asser d\'argent');
                    }
                    else{
                        var achat = 20;
                        var gold = result[0].gold - achat;
                        db.query(`UPDATE user_discord SET gold =  '${gold}' WHERE id_discord = '${membre_id}'`, function(err,result){
                            if(err) throw err;
                            console.log(`L'utilisateur ${membre} viens d'acheter un salon vocal pour ${achat} gold`);
                        });
                    db.commit();
                    if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
                        message.guild.channels.cache.find(channel => channel.name == 'report');
                        message.channel.send('❌ Le channel \"report\" n\'est pas détécté');
                        message.guild.channels.create('report', {type : 'text'});
                        message.channel.send('✅ Je viens de créer le channel. Je vous laisse le placer comme bon vous semble.');
                    }
                    message.react('✅');
                    let channEmbed = new Discord.MessageEmbed()
                    .setTitle("Channel create")
                    .setColor("#8fbc8f")
                    .addFields(
                            {name: 'Created By', value: `${membre} with ID ${membre_id}`},
                            {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
                            {name: 'Permission', value: `Les permission ont été accordées à ${membre}, en tant qu'admistrateur vous gardez la main !`}
                        );
                    message.guild.channels.cache.find(channel => channel.name == 'report').send(channEmbed);
                    }
                });
        }
                    
    }

module.exports.help = {
  name:"vadd"
}