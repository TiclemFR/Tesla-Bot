const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.login(process.env.token);

client.commands = new Discord.Collection();

//mod message
var tab=['fdp','connard','enculé','enculer','connar','conar','connar',
        'connnard','fils de pute', 'pute','va te faire foutre','sa va', 'nique tes mort',
        'nique t\'es mort','nique tes morts', 'nique t\'es morts', 'ta gueule', 'tageule',
        'tagueule', 'ta geule', 'va te faire', 'nique toi', 'nique ta mere', 'nique ta mère',];

client.on('message', message => {
    var msg = message.content.toLowerCase();
    if (message.channel.send) {
        for(i=0; i<tab.length; i++){
            if(msg.includes(tab[i])){
                message.delete();
                message.channel.send('<@' + message.author + '>' + ' Merci de ne pas insulter');
                break;
            }
            
        }
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
