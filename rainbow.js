const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('333278908357017612').roles.find('name', 'R').edit({color: 'RANDOM'}) 
    },100);
}).login(process.env.BOT_TOKEN);
