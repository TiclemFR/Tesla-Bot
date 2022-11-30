require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const mysql  = require('mysql');
const { listenerCount, env } = require('process');
const db = require('./modules/connect');
const errors = require("./modules/errors.js");


//client.login(process.env.token);
client.login(process.env.TOKEN);

client.commands = new Discord.Collection();
let filter = m => !message.author.client;

var tab=['fdp','connard','enculé','enculer','connar','conar','connar',
        'connnard','fils de pute', 'pute','va te faire foutre','sa va', 'nique tes mort',
        'nique t\'es mort','nique tes morts', 'nique t\'es morts', 'ta gueule', 'tageule',
        'tagueule', 'ta geule', 'va te faire', 'nique toi', 'nique ta mere', 'nique ta mère',];

client.on('message', message => {

    var member = message.author;
    var msg = message.content.toLowerCase();
    if (message.channel.send) {
        //Filtrage des messages
        for(i=0; i<tab.length; i++){
            if(msg.includes(tab[i])){
                message.delete();
                message.channel.send('<@' + message.author + '>' + ' Merci de ne pas insulter');
                if(!message.guild.channels.cache.find(channel => channel.name == 'report')){
                    errors.noReport(message.channel, message);
                }
                let warnEmbed = new Discord.MessageEmbed()
                .setDescription("~Warn~")
                .setColor("#e68e34")
                .addFields(
                        {name: 'Warn User', value: `${member} with ID ${member.id}`},
                        {name: 'Time', value: moment.utc(message.createdAt).format('LLL')},
                        {name: 'Reason', value: '**Message:** ' + msg + ' **Cause:** ' + tab[i]},
                    );
                message.guild.channels.cache.find(channel => channel.name == 'report').send(warnEmbed);
                break;
            }
            
        }
        /*//mise à jour des gold par message
        const membre = message.author.username;
        const membre_id = message.author.id;

        //on vérifie si l'utilisateur est déjà dans la base
        db.query(`SELECT id_discord FROM user_discord WHERE id_discord = '${membre_id}'`,function(err,result){
            if(err) throw err;
            
            if(result.length == 0){
                //si il n'éxiste pas on l'insère dans la base
                db.query(`INSERT INTO user_discord (name, id_discord, gold) VALUE ('${membre}', '${membre_id}', '0')`, function (err, result) {

                    if (err) throw err;
                    console.log(`Utilisateur ${membre} ajouté à la base de données`);
                });
            }
            else{
                //sinon on met à jour ses golds
                db.query(`SELECT gold FROM user_discord WHERE id_discord = '${membre_id}'`, function(err,result){
                    if(err) throw err;
                    var ajout = 5;
                    var gold = result[0].gold + ajout;
                    db.query(`UPDATE user_discord SET gold =  '${gold}' WHERE id_discord = '${membre_id}'`, function(err,result){
                        if(err) throw err;
                        console.log(`L'utilisateur ${membre} viens de gagner ${ajout} gold`);
                    });
                });
                
            }
            
        });*/
    }
   
});

fs.readdir('./Commandes/', (error, f) => {
    if(error) console.error(error);

    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if(commandes.length <= 0) return console.log('Aucune commande trouvée !');

    commandes.forEach((f) =>{
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir('./Events/', (error, f) => {
    if(error) console.error(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split('.')[0];

        client.on(event, events.bind(null, client));
    });
});
