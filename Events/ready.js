module.exports = async(client) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    setInterval(function(){
        var tab = ['Aide: t!help || Traverse le sytème solaire 🚀', 'Aide: t!help || Cherche Baro 🕵️‍♂️','🕵️‍Aide: t!help || Admire le néant 😲']
        client.user.setActivity(tab[getRandomInt(3)], { type: "PLAYING"});
    }, 5000)
    
};
