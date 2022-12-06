require('dotenv').config();
const Discord = require('discord.js');
const {Client} = require('discord.js')
const GatewayIntentBits = require('discord.js')
const Events = require('discord.js')
// const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const mysql  = require('mysql');
// const { listenerCount, env } = require('process');
const db = require('./modules/connect');
const errors = require("./modules/errors.js");


const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
],
 });
 
 client.commands = new Discord.Collection();
 let filter = m => !message.author.client;
 
client.login(process.env.TOKEN);
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
     }
   
});
const REST = require('discord.js')
const Routes = require('discord.js');
const token = process.env.TOKEN
const clientId = process.env.CLIENTID
// const fs = require('node:fs');

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync('./Commandes/').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
/* for (const file of commandFiles) {
	const command = require(`./Commandes/${file}`);
	commands.push(command.data.toJSON());
} */
    if(commandFiles.length <= 0) return console.log('Aucune commande trouvée !');

    commandFiles.forEach((f) =>{
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${client.commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId),
			{ body: client.commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

/* fs.readdir('./Commandes/', (error, f) => {
    
    
    if(error) console.error(error);

    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if(commandes.length <= 0) return console.log('Aucune commande trouvée !');

    commandes.forEach((f) =>{
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
}); */

fs.readdir('./Events/', (error, f) => {
    if(error) console.error(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split('.')[0];

        client.on(event, events.bind(null, client));
    });
})
