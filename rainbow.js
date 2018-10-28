const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('333278908357017612').roles.find('name', 'R').edit({color: 'RANDOM'}) 
    },1500);
    
  }
});

client.login('NDEwMjg2OTA2MTk5NTA2OTQ0.DrdCFA.FJYFhzt4KMxuoXy1DVKVt30JuOo');
