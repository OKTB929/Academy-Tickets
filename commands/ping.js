const Discord = require('discord.js');
const { color } = require('../config.json');

module.exports.run = async (bot, message, args) => {
  var ping = Date.now() - message.createdTimestamp + 'ms';
  let embed = new Discord.MessageEmbed()
    .setTitle(':ping_pong: Pong!')
    .setColor(color)
    .addFields({ name: 'Discord Ping', value: `${ping}`, inline: false })
    .addFields({ name: 'API Ping', value: `${bot.ws.ping}ms`, inline: false })

  message.channel.send(embed);
};

module.exports.config = {
  name: 'ping',
  aliases: ['pong'],
  usage: 'ping',
  description: 'Shows API ping of the bot!',
};