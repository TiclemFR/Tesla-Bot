const Discord = require('discord.js');
const config = require("../modules/botconfig.json");

module.exports.run = async(client, message, args) => {

    let membre = message.author.username;
    let emoji1;
    let emoji2;
    let msg;

    if(!args[0]){
        message.channel.send('❌ Faite votre choix (Pierre | Feuille | Ciseaux)');
    }
    else{
        let choix = args.join(" ").toLowerCase();
        function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      if(choix != 'pierre' && choix != 'feuille' && choix != 'ciseaux'){
          message.channel.send('❌ Ce choix n\'est pas disponible');
      }
      else{
        var rps = getRandomInt(3);

        var tab = ['pierre', 'feuille', 'ciseaux'];

        if(choix == 'pierre'){
            emoji1 = ':rock:';
        }
        else if(choix == 'feuille'){
            emoji1 = ':leaves:';
        }
        else if(choix == 'ciseaux'){
            emoji1 = ':scissors:';
        }

        var result = tab[rps];
        var test;

        if(result == 'pierre'){
            emoji2 = ':rock:';
        }
        else if(result == 'feuille'){
            emoji2 = ':leaves:';
        }
        else if(result == 'ciseaux'){
            emoji2 = ':scissors:';
        }


        if(choix == result){
            msg = 'Égalité !';
            test = 0.5;
        }
        else if(choix == 'pierre' && result == 'feuille'){
            msg = 'Perdu !';
            test = 0;
        }
        else if(choix == 'pierre' && result == 'ciseaux'){
            msg = 'Gagné !';
            test = 1;
        }
        else if(choix == 'feuille' && result == 'pierre'){
            msg = 'Gagné !';
            test = 1;
        }
        else if(choix == 'feuille' && result == 'ciseaux'){
            msg = 'Perdu !';
            test = 0;
        }
        else if(choix == 'ciseaux' && result == 'pierre'){
            msg = 'Perdu !';
            test =0;
        }
        else if(choix == 'ciseaux' && result == 'feuille'){
            msg = 'Gagné !';
            test = 1;
        }
        let color;
        if(test == 0){
            color = config.red;
        }
        else if(test == 0.5){
            color = config.orange;
        }
        else if(test == 1){
            color = config.green;
        }

        let embed = new Discord.MessageEmbed()
        .setColor(color)
        .addFields(
            {name: `${membre}`, value: `${emoji1}`, inline: true},
            {name: 'VS', value: `:zap:`, inline: true},
            {name: `${client.user.username}`, value: `${emoji2}`, inline: true},
            {name: 'Résultat', value: `${msg}`},
        )
        message.channel.send(embed);
      }
      

    }
};

module.exports.help = {
    name: "rps"
}