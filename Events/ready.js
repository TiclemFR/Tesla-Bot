module.exports = async(client) => {

    client.presences.set({
        game: {
            name: "t!help --> Afficher l\'aide | Dernier ajout: Liste des problèmes"
        }
    })
};
