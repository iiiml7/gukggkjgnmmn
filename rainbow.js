const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('333278908357017612').roles.find('name', 'R').edit({color: '1,2,3,4,5,6,7,8,9,10'}) 
    },50);

});

client.login('NDEwMjg2OTA2MTk5NTA2OTQ0.DrXGxg.FxiDwR3Im2kuNsnaT80gOTeXSG0');
