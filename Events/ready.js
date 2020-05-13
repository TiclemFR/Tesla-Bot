module.exports = async(client) => {

    client.presences.update({
        game: {
            name: "t!help --> Afficher l\'aide | Dernier ajout: Liste des problèmes"
        }
    })
};
