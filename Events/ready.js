module.exports = async(client) => {

    client.presences({
        game: {
            name: "t!help --> Afficher l\'aide | Dernier ajout: Liste des problèmes"
        }
    })
};
