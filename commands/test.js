const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Working!`)
}


module.exports.config = {
  name: 'test',
  aliases: [],
  usage: 'test',
  description: 'Test command!',
};