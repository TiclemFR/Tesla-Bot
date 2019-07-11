module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "t!help --> Afficher l\'aide | Nouvelle fonctionnalité: Musique |"
        }
    })
};
