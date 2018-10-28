const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('333278908357017612').roles.find('name', 'R').edit({color: 'RANDOM'}) 
    },60000);

});
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'with depression',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});
client.login('NDEwMjg2OTA2MTk5NTA2OTQ0.DrXGxg.FxiDwR3Im2kuNsnaT80gOTeXSG0');
