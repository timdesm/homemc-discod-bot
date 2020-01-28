const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token, botActivity } = require('./config.json');

Structures.extend('Guild', Guild => {
    class MusicGuild extends Guild {
      constructor(client, data) {
        super(client, data);
        this.musicData = {
          queue: [],
          isPlaying: false,
          nowPlaying: null,
          songDispatcher: null
        };
        this.triviaData = {
          isTriviaRunning: false,
          wasTriviaEndCalled: false,
          triviaQueue: [],
          triviaScore: new Map()
        };
      }
    }
    return MusicGuild;
  });

  const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '262952688189177857',
    unknownCommandResponse: false
  });


  client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn('C:/Users/timde/Cloud/Projecten/HomeMC/Discord Bot/Build 1.0/commands');

  client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(botActivity);
  });

client.login(token);