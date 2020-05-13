const Discord = require('discord.js');
module.exports = async(client) => {

    client.user.changePresence(Discord.Game("t!help --> Afficher l\'aide | Dernier ajout: Liste des problèmes"));
};
