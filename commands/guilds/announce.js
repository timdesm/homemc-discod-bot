const { Command } = require('discord.js-commando');

module.exports = class AnnounceCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'announce',
      aliases: ['say', 'print'],
      memberName: 'announce',
      group: 'guild',
      guildOnly: true,
      description: 'Make the bot announce anything',
      args: [
        {
          key: 'channel',
          prompt: 'What channel must be used for the announement?',
          type: 'channel'
        },
        {
          key: 'text',
          prompt: 'What do you want the bot to announce?',
          type: 'string'
        }
      ]
    });
  }

  run(message, { text, channel }) {
    message.say('Message is send to the destinated channel');
    return channel.send(text);
  }
};
