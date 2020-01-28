const { Command } = require('discord.js-commando');

module.exports = class AnnounceCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rps',
      aliases: ['sps', 'stonepaperscissors'],
      memberName: 'rps',
      group: 'other',
      description: 'Play a rock, paper, scissors game.',
      args: [
        {
          key: 'choice',
          prompt: 'Rock, paper or scissors?',
          type: 'string'
        }
      ]
    });
  }

  run(message, { choice, }) {
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }

    var input = choice.toLowerCase();

    var array = ["rock,:mountain:", "paper,:notepad_spiral:", "scissors,:scissors:"];
    var wins = {"rock": "scissors", "scissors": "paper", "paper": "rock"};

    var random_element = array[Math.floor(Math.random()*array.length)]

    var name = random_element.split(',')[0];
    var emote = random_element.split(',')[1];

    var win_message = "";

    if(wins[input] === undefined) {
      return message.say(`Invalid choice provided!`);
    }
    else if (input === name) {
      win_message = "It's a draw!";
    }
    else if (wins[input] === name) {
      win_message = "You win! :tada:";
    }
    else {
      win_message = "I win! :tada:";
    }

    return message.say(`I had ${name} ${emote} (${win_message})`);
  }

};

