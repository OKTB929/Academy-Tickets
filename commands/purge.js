const Discord = require('discord.js');
const { color } = require('../config.json');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.permissions.has('MANAGE_MESSAGES'))
    return errors.noPerms(message, 'MANAGE_MESSAGES');
  if (!args[1])
    return message.channel.send(
      'Please give me the amount of messages to delete!'
    );
  if (args[1] && ms(args[1]) == undefined)
    return message.channel.send('Please give me a number!');
  let purgenumber = args[1];
  if (args[1] > 10000)
    return message.channel.send(`Please give me a number between 2-10000!`);
  if (args[1] < 2)
    return message.channel.send(`Please give me a number between 2-10000!`);
  message.channel.bulkDelete(purgenumber);

  let embed = new Discord.MessageEmbed()
    .setTitle(
      `${args[1]} messages have been deleted by ${message.author.username}`
    )
    .setColor(color);

  message.channel
    .send(embed)
    .then((msg) => {
      msg.delete({ timeout: 2500 });
    })
.catch(console.error);   
};

module.exports.config = {
  name: 'purge',
  aliases: ['clear'],
  usage: 'purge (amount)',
  description: 'Clears the given amount of messages!',
};