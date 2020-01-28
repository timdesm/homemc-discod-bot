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
    ['music', 'Music Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

  client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(botActivity);
  });

client.login(token);