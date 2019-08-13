const Discord = require('discord.js');
const client = new Discord.Client();
const money = require("./modules/money.json")
const fs = require('fs');

client.login(process.env.token);

client.commands = new Discord.Collection();


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
    //SYSTEME MONEY
module.exports = async(client, message, args) => {
    if(!money[message.author.id]) {
        money[message.author.id] = {
            money: 0
        }
    }

    let baseMoney = Math.floor(Math.random() * 20) + 1;
    let ajoutMoney = Math.floor(Math.random() * 5) +1;

    if (ajoutMoney === baseMoney) {
        money[message.author.id] = {
            money: money[message.author.id].money + ajoutMoney  
        };
        fs.writeFile('./modules/money.json', JSON.stringify(money), error =>{
            if (error) console.error(error)
        });
    }
}
});
