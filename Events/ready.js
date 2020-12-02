module.exports = async(client) => {

    client.user.setActivity("t!help --> Afficher l\'Aide", { type: "PLAYING"});
    client.user.setPresence({status : 'online'});
};
