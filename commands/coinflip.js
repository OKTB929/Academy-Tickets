const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  let random = Math.floor(Math.random() * Math.floor(2));

  if (random === 0) {
    message.channel.send('I flipped heads!');
  } else {
    message.channel.send('I flipped tails!');
  }
};

module.exports.config = {
  name: 'coinflip',
  aliases: ['cf'],
  usage: 'coinflip',
  description: 'Flips a coin and returns back with heads or tails!',
};