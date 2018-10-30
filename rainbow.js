const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDEwMjg2OTA2MTk5NTA2OTQ0.DroUuA.se0wx8GVvQRdG5nodfiKvsf56Tw');
