const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}');
});

client.login('NjcxNDY0MzAzMjAyOTI2NjAy.XjArAg._gLXcuR3rNV7ZmiAFWkHCnTtuQc');