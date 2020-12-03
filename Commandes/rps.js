const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

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

        var result = tab[rps];
        var test;
        if(choix == result){
            test = 0.5;
        }
        else if(choix == 'pierre' && result == 'feuille'){
            test = 0;
        }
        else if(choix == 'pierre' && result == 'ciseaux'){
            test = 1;
        }
        else if(choix == 'feuille' && result == 'pierre'){
            test = 1;
        }
        else if(choix == 'feuille' && result == 'ciseaux'){
            test = 0;
        }
        else if(choix == 'ciseaux' && result == 'pierre'){
            test =0;
        }
        else if(choix == 'ciseaux' && result == 'feuille'){
            test = 1;
        }
        if(test == 0){
            message.channel.send('🥈 Dommage, ce sera pour une prochaine fois');
        }
        else if(test == 0.5){
            message.channel.send('Oups, égalité');
        }
        else if(test == 1){
            message.channel.send('🏆 Bravo, tu a gagné');
        }
      }
      

    }
};

module.exports.help = {
    name: "rps"
}