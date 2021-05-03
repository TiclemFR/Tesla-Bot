module.exports = async(client) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    setInterval(function(){
        var tab = ['Aide: t!help || Traverse le sytème solaire 🚀', 'Aide: t!help || A la recherche de Baro 🕵️‍♂️',
        '‍Aide: t!help || Investie dans le Prime 💵','Aide: t!help || Craft des trucs 🛠️']
        client.user.setActivity(tab[getRandomInt(tab.length)], { type: "PLAYING"});
    }, 10000)
    
};
