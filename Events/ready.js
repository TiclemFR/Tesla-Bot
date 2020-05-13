module.exports = async(client) => {

    client.createPresence({
        game: {
            name: "t!help --> Afficher l\'aide | Dernier ajout: Liste des problèmes"
        }
    })
};
