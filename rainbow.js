const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('333278908357017612').roles.find('name', 'R').edit({color: 'RANDOM'}) 
    },800);

});
client.on('ready', function(){	
    var ms = 100000 ;	
    var setGame = ['MLOO7'];	
    var i = -1;	
    var j = 0;	
    setInterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setGame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});
client.login('NDEwMjg2OTA2MTk5NTA2OTQ0.DrXGxg.FxiDwR3Im2kuNsnaT80gOTeXSG0');
